$(document).ready(function () {
  if ($('body.sweater-page').length) {
    const sweater_id = $('.sweater').data('sweater');
    if (sweater_id) {
      $.ajax({
        type: 'GET',
        url: api_url + '/sweaters/' + sweater_id,
      }).done(function (result) {
        console.log(result);
      });
    }
  }
});
