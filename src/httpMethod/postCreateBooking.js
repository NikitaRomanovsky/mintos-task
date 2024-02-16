import { endpoint } from '../utils/globalVariables'

const axios = require('axios').default

export function postCreateBooking(body, header) {
    return axios.post(`${endpoint}/booking`, body, header)
}