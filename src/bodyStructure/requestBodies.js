import * as generate from '../utils/randomGenerator';

export const createAccountBody = {
	email: generate.generateRandomEmail(),
	password: generate.generateRandomPassword(),
	languageId: generate.generateRandomLanguageId(),
	emailConfirmationUrl: generate.generateRandomEmailConfirmationUrl(),
};
