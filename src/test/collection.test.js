import { createAccountBody } from '../bodyStructure/requestBodies';
import { createAccountRequest } from '../requests/requests';
import { generateRandomEmail } from '../utils/randomGenerator';

describe('Create account with valid data', () => {
	let response;

	beforeAll(async () => {
		const body = {
			...createAccountBody,
			email: generateRandomEmail(),
		};

		response = await createAccountRequest(body);
		console.log('Reponse is: ', response.data);
	});

	test('Confirm that request is successful', async () => {
		expect(response.status).toEqual(200);
	});
});

describe('Create account with already taken email', () => {
	let body;

	beforeAll(async () => {
		body = {
			...createAccountBody,
			email: generateRandomEmail(),
		};

		const response = await createAccountRequest(body);
		console.log('Reponse is: ', response.data);
	});

	test('Confirm that request is failed with 400', async () => {
		try {
			await createAccountRequest(body);
		} catch (error) {
			console.log('Error response is: ', error.response.data);

			expect(error.response.status).toEqual(400);
			expect(error.response.data.message).toEqual(
				'User with same email already exists'
			);
		}
	});
});

describe('Create account with weak password', () => {
	let body;

	beforeAll(() => {
		body = {
			...createAccountBody,
			email: generateRandomEmail(),
			password: '123abc',
		};
	});

	test('Confirm that request is failed with 400', async () => {
		try {
			await createAccountRequest(body);
		} catch (error) {
			console.log('Error response is: ', error.response.data);

			expect(error.response.status).toEqual(400);
			expect(error.response.data.message).toEqual('Password validation failed');
		}
	});
});

describe('Create account with invalid email format', () => {
	let body;

	beforeAll(() => {
		body = {
			...createAccountBody,
			email: '123abc',
		};
	});

	test('Confirm that request is failed with 400', async () => {
		try {
			await createAccountRequest(body);
		} catch (error) {
			console.log('Error response is: ', error.response.data);

			expect(error.response.status).toEqual(400);
			expect(error.response.data.message).toEqual(
				"'Email' is not a valid email address."
			);
		}
	});
});

describe('Create account with missing email', () => {
	test('Confirm that request is failed with 500', async () => {
		const { email, ...body } = createAccountBody;
		try {
			await createAccountRequest(body);
		} catch (error) {
			console.log('Error response is: ', error.response.data);

			expect(error.response.status).toEqual(500);
		}
	});
});
