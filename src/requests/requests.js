const axios = require('axios');
import * as variables from '../utils/globalVariables';

export function createAccountRequest(body) {
	return axios.post(`${variables.endpoint}/api/account/register`, body);
}
