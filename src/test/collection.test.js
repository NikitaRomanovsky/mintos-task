import {
  createInvalidUser,
  createValidUser,
  updateValidUser,
  updateInvalidUser,
} from "../bodyStructure/requestBodies";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  unauthenticatedCreateUser,
} from "../requests/requests";

describe("User API Tests", () => {
  let createdUserId;

  describe("Create User API Tests", () => {
    test("Create a user with valid data", async () => {
      const createUserResponse = await createUser(createValidUser);

      console.log("Create valid user response: ", createUserResponse);

      expect(createUserResponse.status).toEqual(201);
      expect(createUserResponse.statusText).toEqual("Created");
    });

    test("Create a user without providing 'lastName'", async () => {
      try {
        await createUser(createInvalidUser);
      } catch (error) {
        console.log("Create invalid user response: ", error.response);

        expect(error.response.status).toEqual(400);
        expect(error.response.statusText).toEqual("Bad Request");
        expect(error.response.data.title).toEqual("Invalid Input"); // I assume it to be the title considering API consistency. Comment out if I am wrong
        expect(error.response.data.detail).toContain("lastName"); // Since I do not know the exact error message received, I assume it to at least contain 'lastName'. Comment out if I am wrong
        expect(error.response.data.instance).toEqual("/users");
      }
    });

    // Bonus: Test the API without authentication
    test("Create a user without authentication", async () => {
      try {
        await unauthenticatedCreateUser(validUser);
      } catch (error) {
        console.log(
          "Create user without authentication response: ",
          error.response
        );

        expect(error.response.status).toBe(401);
        expect(error.response.statusText).toBe("Unauthorized");
      }
    });
  });

  describe("Get User API Tests", () => {
    test("Get the user by ID", async () => {
      const getAllUsersResponse = await getUsers();
      createdUserId = getAllUsersResponse.data[0].id; // The approach works for empty database. Where just created user in tests above always be the first one

      const getUserResponse = await getUserById(createdUserId);

      console.log("Get user by ID response: ", getUserResponse.data);

      expect(getUserResponse.status).toEqual(200);
      expect(getUserResponse.statusText).toEqual("OK");
      expect(getUserResponse.data).toEqual(
        expect.objectContaining(createValidUser)
      );
    });

    test("Get a user with non-existing ID", async () => {
      try {
        await getUserById(999999);
      } catch (error) {
        console.log("Get user by non-existing ID response: ", error.response);

        expect(error.response.status).toEqual(404);
        expect(error.response.statusText).toEqual("Not Found");
      }
    });
  });

  describe("Update User API Tests", () => {
    test("Update the user by ID", async () => {
      const updateUserResponse = await updateUser(
        createdUserId,
        updateValidUser
      );

      console.log("Update user response: ", updateUserResponse.data);

      expect(updateUserResponse.status).toEqual(200);
      expect(updateUserResponse.statusText).toEqual("OK");
      expect(updateUserResponse.data.lastName).toEqual(
        updateValidUser.lastName
      );
      expect(updateUserResponse.data.email).toEqual(updateValidUser.email);
    });

    test("Update a user with non-existing ID", async () => {
      try {
        await updateUser(999999, updateValidUser);
      } catch (error) {
        console.log(
          "Update user by non-existing ID response: ",
          error.response
        );

        expect(error.response.status).toEqual(404);
        expect(error.response.statusText).toEqual("Not Found");
      }
    });

    test("Update a user with invalid data", async () => {
      try {
        await updateUser(createdUserId, updateInvalidUser);
      } catch (error) {
        console.log(
          "Update user with invalid country code response: ",
          error.response
        );

        expect(error.response.status).toEqual(400);
        expect(error.response.statusText).toEqual("Bad Request");
        expect(error.response.data.title).toEqual("Invalid Input");
        expect(error.response.data.detail).toEqual(
          "The countryOfIssue must be an ISO 3166-1 alpha-2 code."
        );
        expect(error.response.data.instance).toEqual("/users");
      }

      // Bonus: Data-driven tests
      test.each([
        [
          {
            ...updateValidUser,
            firstName: INVALID_INPUT_VALUES.tooShortName,
          },
        ],
        [
          {
            ...updateValidUser,
            firstName: INVALID_INPUT_VALUES.tooLongName,
          },
        ],
        [
          {
            ...updateValidUser,
            lastName: INVALID_INPUT_VALUES.tooShortName,
          },
        ],
        [
          {
            ...updateValidUser,
            lastName: INVALID_INPUT_VALUES.tooLongName,
          },
        ],
      ])(
        "Update a user with too short or too long data",
        async (invalidPayload) => {
          try {
            await updateUser(createdUserId, invalidPayload);
          } catch (error) {
            console.log(
              "Update user with invalid length data response: ",
              error.response
            );

            expect(error.response.status).toBe(400);
            expect(error.response.statusText).toBe("Bad Request");
            expect(error.response.data.title).toBe("Invalid Input");
            expect(error.response.data.instance).toBe("/users");
          }
        }
      );
    });

    describe("Delete User API Tests", () => {
      test("Delete the user by ID", async () => {
        const deleteUserResponse = await deleteUser(createdUserId);

        console.log("Delete user response: ", deleteUserResponse);

        expect(deleteUserResponse.status).toEqual(204);
        expect(deleteUserResponse.statusText).toEqual("No Content");
      });

      test("Delete a user with non-existing ID", async () => {
        try {
          await deleteUser(createdUserId);
        } catch (error) {
          console.log(
            "Delete user by non-existing ID response: ",
            error.response
          );

          expect(error.response.status).toEqual(404);
          expect(error.response.statusText).toEqual("Not Found");
        }
      });
    });
  });
});
