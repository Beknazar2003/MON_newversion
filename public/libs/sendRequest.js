const GETdata = new Array()
const requestURL = 'http://localhost:3000/data'

google.charts.load('49', {
  'packages': ['corechart', 'controls']
})

function sendRequest(method, url) {
  const headers = {
    'Content-Type': 'application/json',
  }

  return fetch(url, {
    method: method,
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }

    return response.json().then(error => {
      const e = new Error('Что-то пошло не так')
      e.data = error
      throw e
    })
  })
}

sendRequest('GET', requestURL)
  .then(data => {
    data.forEach(element => {
      GETdata.push(element)
    });
  })

sendRequest('GET', 'http://localhost:3000/xml')
.then(data => console.log(data))