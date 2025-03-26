# mintos-task

This project is an API testing suite that covers CRUD operations for the **User** entity. It includes tests for all happy paths, edge cases, and additional bonus points such as security and data-driven tests. The goal is to ensure the API behaves as expected under various conditions.

## Project Structure

The project is organized into the following directories:

- **`src/bodyStructure`**:
  - Contains request body templates for creating and updating users.
  
- **`src/requests`**:
  - Includes functions for making API requests (e.g., GET, POST, PUT, DELETE).

- **`src/test`**:
  - Contains test cases for validating the API functionality.

- **`src/utils`**:
  - Holds hardcoded invalid input values and other reusable utilities.

Additionally, in the root directory, there is a `.env` file where the user must input the server URL and API credentials before running the tests.

## Prerequisites

- Ensure that **Yarn** package manager is installed globally on your machine.

## Getting Started

Follow these steps to set up and run the project:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bonapp-task
   ```

2. Create a `.env` file in the root directory with the following content:
   ```env
   API_BASE_URL=http://your-server-url/api
   API_USERNAME=your-username
   API_PASSWORD=your-password
   ```

3. Install dependencies:
   ```bash
   yarn install
   ```

4. Run the tests:
   ```bash
   yarn test
   ```

## Key Features

- **Comprehensive Test Coverage**:
  - Covers CRUD operations for the User entity.
  - Includes tests for happy paths, edge cases, and error scenarios.

- **Security Tests**:
  - Validates API behavior for unauthenticated and unauthorized requests.

- **Data-Driven Tests**:
  - Uses `test.each` to test multiple scenarios with different inputs dynamically.

- **Environment Configuration**:
  - The `.env` file allows users to configure the server URL and API credentials easily.

## Notes

- Ensure the API server is running and accessible before executing the tests.
- The tests are designed to run against a live API, so the `.env` file must be correctly configured.

## Example `.env` File

```env
API_BASE_URL=http://localhost:8080/api
API_USERNAME=admin
API_PASSWORD=admin123
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.