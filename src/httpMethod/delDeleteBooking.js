import { bookingId, endpoint } from '../utils/globalVariables'

const axios = require('axios').default

export function deleteBooking (header) {
    return axios.delete(`${endpoint}/booking/${bookingId}`, header)
}