import { INVALID_INPUT_VALUES } from "../utils/invalidInputValues";

export const createValidUser = {
  firstName: "Nick",
  lastName: "Roma",
  email: "nick.roma@example.com",
  dateOfBirth: "1985-10-01",
  personalIdDocument: {
    documentId: "AB123456",
    countryOfIssue: "US",
    validUntil: "2030-12-31",
  },
};

export const createInvalidUser = {
  firstName: "John",
  // It misses the lastName field
  dateOfBirth: "1985-10-01",
  personalIdDocument: {
    documentId: "AB123456",
    countryOfIssue: "US",
    validUntil: "2030-12-31",
  },
};

export const updateValidUser = {
  firstName: "Nikita",
  lastName: "Updated",
  email: "nikita.updated@example.com",
  dateOfBirth: "2000-01-01",
  personalIdDocument: {
    documentId: "NEW123456",
    countryOfIssue: "LV",
    validUntil: "2040-12-31",
  },
};

export const updateInvalidUser = {
  firstName: "Nick",
  lastName: "Roma",
  email: "nick.roma@example.com",
  dateOfBirth: "1985-10-01",
  personalIdDocument: {
    documentId: "NEW123456",
    countryOfIssue: INVALID_INPUT_VALUES.invalidCountryCode,
    validUntil: "2040-12-31",
  },
};
