import config from '../config';

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },

  // This is a call to the server at localhost:8000/api/users to add new user to DB
  postUser(user) {
    return fetch (`${config.API_ENDPOINT}/subscribers`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => 
        (!res.ok)
          ?res.json().then(e => Promise.reject(e))
          : res.json()
          )
      },
  };

export default AuthApiService;