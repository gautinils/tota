---
layout: default
class: sweater-page
---

<section class="row sweater" data-sweater="{{ page.sweater_id }}" data-title="{{ page.title }}">
	<div class="col-xs-12 col-sm-6">
		<img class="sweater-image" src="{{ page.image }}">
	</div>
	<div class="col-xs-6 col-sm-4 sweater-info">
		<p>{{ page.description }}</p>
		<p>Price: {{ page.price }}$</p>
		{% if page.paypal_button_id %}
		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick">
			<input type="hidden" name="hosted_button_id" value="7BS799A9R3XQ8">
			<input class="form-button" type="image" name="submit" value="Buy this sweater">
		</form>
		{% endif %}
	</div>
</section>
