const GETdata = new Array()
const requestURL = '/data/data'

google.charts.load('49', {
    'packages': ['corechart', 'controls', 'bar']
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
        })
    })