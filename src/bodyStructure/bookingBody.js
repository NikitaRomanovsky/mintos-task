import * as variables from '../utils/globalVariables'
import * as generated from './preRequest';

export const createBodyBooking = {
    firstname: variables.firstname,
    lastname: variables.lastname,
    totalprice: generated.price,
    depositpaid: true,
    bookingdates: {
      checkin: generated.checkinDate,
      checkout: generated.checkoutDate,
    },
    additionalneeds: variables.additionalneeds,
  };

  export const updatePutBodyBooking = {
    firstname: variables.firstname,
    lastname: variables.lastname,
    totalprice: generated.updatedPrice,
    depositpaid: true,
    bookingdates: {
      checkin: generated.checkinDate,
      checkout: generated.updatedCheckoutDate,
    },
    additionalneeds: variables.additionalneeds,
  };

  export const updatePatchBodyBooking = {
    depositpaid: false,
    additionalneeds: 'Parking',
  }