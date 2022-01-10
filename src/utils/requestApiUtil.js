


const requestApi = (options) => {

  const headers = new Headers({
    'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':  'http://127.0.0.1:8080'
  })
  const defaults = { headers }

  options = Object.assign({}, defaults, options)

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return json
    }),
  )
}

export default requestApi
