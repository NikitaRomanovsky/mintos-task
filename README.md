# bonapp-task

This project tests create account API endpoint under positive and negative conditions, leveraging randomized data to ensure no hardcoded or duplicated values are used. Each request is dynamically generated, providing unique inputs for each test run.\

It also includes Postman collection for positive scenarios of create account functionality. Postman as well leverages randomized data in pre-request hooks and validate the response code in post-request hook.

The project is built with the following technologies:

- Axios for sending requests.
- Jest for running tests and validating responses.
- Lodash library for generating random data.

  
Key Features:
- Randomized Data: All data used in requests is randomly generated to avoid hardcoded values. This ensures unique inputs every time the tests are executed.
- Pre-Request Set-up: All randomly generated data is assigned to variables that will be used for making a request.
- Post-Request Validation: Every request includes a post-request hook to validate the response code, ensuring that the API behaves as expected.


## Getting Started

To make the project work, run the following commands after cloning the repo:\
**NB: Make sure that Yarn package manager is installed globally on your machine**\

To install all dependecies:
```bash
yarn init  
yarn install
```
To run all tests:
```bash
yarn jest  
```
