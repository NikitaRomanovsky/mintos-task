const axios = require('axios').default
import * as variables from '../utils/globalVariables'

export function postCredentials(body, headers) {
    return axios.post(`${variables.endpoint}/auth`, body, headers)
}