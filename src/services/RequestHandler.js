export default class RequestHandler {
  api = 'https://jsonplaceholder.typicode.com'

  get(path) {
    return this.fetchData(path, 'GET')
  }

  post(path, data) {
    return this.fetchData(path, 'POST', data)
  }

  fetchData(path, method, data) {
    return fetch(`${this.api}/${path}`, {
      body: data ? JSON.stringify(data) : null, // must match 'Content-Type' header
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer' // *client, no-referrer
    }).then(response => response.json())
  }
}
