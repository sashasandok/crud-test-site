const apiBaseUrl = 'http://localhost:4000/api/'

const apiUrl = (endpoint) => apiBaseUrl + endpoint

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const get = (endpoint) =>
  fetch(apiUrl(endpoint), {
    method: 'GET',
    headers: headers,
  }).then((response) => response.json())

export const post = (endpoint, { ...args }) =>
  fetch(apiUrl(endpoint), {
    method: 'POST',
    headers: {
      ...headers,
    },
    body: JSON.stringify(args),
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => data)

export const put = (endpoint, { ...args }) =>
  fetch(apiUrl(endpoint), {
    method: 'PUT',
    headers: {
      ...headers,
    },
    body: JSON.stringify(args),
  }).then((response) => response.json())

export const del = (endpoint) =>
  fetch(apiUrl(endpoint), {
    method: 'DELETE',
    headers: {
      ...headers,
    },
  }).then((response) => response.status === 200)
