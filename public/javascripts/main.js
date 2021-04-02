$('document').ready(() => {
  
  $('select#TimeFilter').change(options => {
        sendRequest('GET',`http://localhost:3000/data?timeFilter=${options.currentTarget.value}`)
  })
  
})