const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

var name = 'San Francisco'



xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
        let resultado = JSON.parse(this.response)
    
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/city?name=' + name,
            headers: { 'X-Api-Key': '0sYi5iZnSZ75r99W8IcI0Q==CKN88fC7nDTLS6rg'},
            contentType: 'application/json',
            success: function(result) {
                console.log(result);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }

        });
        console.log(resultado)
	}
});
















