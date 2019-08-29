---
layout: default
---	
<section class="row sweaters">
	{% for sweater in site.sweaters %}
	<a href="{{ sweater.url | absolute_url }}">
		<img src="{{ sweater.image | absolute_url }}" width="300">
	</a>
	{% endfor %}
</section>