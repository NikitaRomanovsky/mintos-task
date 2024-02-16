import { bookingId, endpoint } from '../utils/globalVariables'

const axios = require('axios').default

export function putUpdateBooking (body, header) {
    return axios.put(`${endpoint}/booking/${bookingId}`, body, header)
}