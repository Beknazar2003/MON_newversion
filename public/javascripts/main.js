$('document').ready(() => {
  
  $('select#TimeFilter').change((options) => {
        console.log(options.currentTarget.value)
  })
  
})