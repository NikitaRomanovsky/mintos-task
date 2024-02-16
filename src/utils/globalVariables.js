export const endpoint = 'https://restful-booker.herokuapp.com';

export const username = 'admin';
export const password = 'password123';

export let token;
export let bookingId;

export const firstname = 'Nikita';
export const lastname = 'R';
export const additionalneeds = 'Dinner';

export const headerAuth = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const headerBooking = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};

export const headerBookingById = {
  headers: {
    'Accept': 'application/json'
  },
};

export const headerForAuthorization = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cookie': `token=${token}`,
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
    }
}
