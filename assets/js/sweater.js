const sweater_id = $('.sweater').data('sweater');
if (sweater_id) {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8000/sweaters/' + sweater_id,
  }).done(function(result) {
    console.log(result);
  })
}

