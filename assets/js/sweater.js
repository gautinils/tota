const sweater_id = $('.sweater').data('sweater');
console.log(sweater_id);
$.ajax({
	type: 'GET',
	url: 'http://localhost:8000/sweaters/' + sweater_id,

}).done(function(result) {
  console.log(result);
}).fail(function(error) {
	console.log('err', error);
});
