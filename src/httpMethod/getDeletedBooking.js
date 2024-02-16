import { bookingId, endpoint } from '../utils/globalVariables'

const axios = require('axios').default

export function getDeletedBooking (header) {
    return axios.get(`${endpoint}/booking/${bookingId}`, header)
}