var name = document.getElementById("n1");

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/city?name=' + name,
    headers: { 'X-Api-Key': '0sYi5iZnSZ75r99W8IcI0Q==CKN88fC7nDTLS6rg'},
    contentType: 'application/json',
    success: function(result) {

        console.log(result)
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }


});












