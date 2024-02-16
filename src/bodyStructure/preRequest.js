import * as random from "../utils/priceAndDateGenerator";
const moment = require('moment')

// For creating booking:

export const price = random.generatePrice()

export const checkinDate = random.generateCheckinDate()

export const checkoutDate = random.generateCheckoutDate()

// For updating booking with PUT:

export const updatedPrice = random.generateUpdatedPrice()

export const updatedCheckoutDate = random.generateUpdatedCheckoutDate()