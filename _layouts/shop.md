---
layout: default
---	
<section class="row sweaters">
	{% for sweater in site.sweaters %}
	<a href="{{ sweater.url }}">
		<img src="{{ sweater.image }}" width="300">
	</a>
	{% endfor %}
</section>