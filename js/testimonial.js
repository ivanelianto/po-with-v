$('#testimonialForm').on('submit', (e) => {
  if ($('#name').val() === '') {
    e.preventDefault()
    alert('Name must be filled.')
  }
  else if ($('#title').val() === '') {
    e.preventDefault()
    alert('Title must be filled.')
  }
  else if ($('#title').val().length < 4) {
    e.preventDefault()
    alert('Title must be at least 4 characters.')
  }
  else if ($('#male').prop('checked') === false &&
    $('#female').prop('checked') === false) {
    e.preventDefault()
    alert('Gender must be selected.')
  }
  else if (!$('#address').val().toLowerCase().endsWith('street')) {
    e.preventDefault()
    alert('Address must be ended with \'street\'.')
  }
  else if ($('#review').val().split(' ').length < 6) {
    e.preventDefault()
    alert('Review must be at least 7 words.')
  }
  else {
    alert('Thank you!')
  }
})