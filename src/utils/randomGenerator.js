const lodash = require('lodash');

function generateRandomString(length) {
	return lodash.sampleSize('ABCdef12345', length).join('');
}

export function generateRandomEmail() {
	return `${generateRandomString(10)}@test.com`;
}

export function generateRandomPassword() {
	return `${generateRandomString(20)}?@!`;
}

export function generateRandomLanguageId() {
	return lodash.random(0, 5);
}

export function generateRandomEmailConfirmationUrl() {
	return `https://${generateRandomString(10)}.com`;
}
