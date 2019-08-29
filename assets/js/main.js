---
---
const api_url = {% if jekyll.environment == "production" %} 
    'https://tota-van-helzing-api.herokuapp.com'
  {% else %}
    'http://localhost:8000'
	{% endif %} 

{% include_relative sweater.js %}