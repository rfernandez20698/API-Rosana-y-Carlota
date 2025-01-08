

document.getElementById("añadir").addEventListener('click', function(){
    let name = document.getElementById("name").value
        
    document.getElementById("capital").style.display = "block";
    document.getElementById("pais").style.display = "block";
    document.getElementById("población").style.display = "block";
    document.getElementById("latitud").style.display = "block";
    document.getElementById("longitud").style.display = "block";
    document.getElementById("región").style.display = "block";
    

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/city?name='+name,
        headers: { 'X-Api-Key': '0sYi5iZnSZ75r99W8IcI0Q==CKN88fC7nDTLS6rg'},
        contentType: 'application/json',
        success: function(result) {
            
            if(result[0].country == "ES"){
                result[0].country = "España";
             }
             if(result[0].country == "US"){
                result[0].country = "Estados Unidos";
             }
             if(result[0].country == "AF"){
                result[0].country = "Afganistan";
             }
             if(result[0].country == "SI"){
                result[0].country = "Eslovenia";
             }  
             if(result[0].country == "AL"){
                result[0].country = "Albania";
             }  
             if(result[0].country == "DE"){
                result[0].country = "Alemania";
             }  
             if(result[0].country == "AD"){
                result[0].country = "Andorra";
             }  
             if(result[0].country == "EE"){
                result[0].country = "Estonia";
             }  
             if(result[0].country == "AO"){
                result[0].country = "Angola";
             }  
             if(result[0].country == "ET"){
                result[0].country = "Etiopía";
             }  
             if(result[0].country == "AI"){
                result[0].country = "Anguila";
             }  
             if(result[0].country == "AQ"){
                result[0].country = "Antártida";
             }  
             if(result[0].country == "AG"){
                result[0].country = "Antigua y Barbuda";
             }  
             if(result[0].country == "AN"){
                result[0].country = "Antillas Neerlandesas";
             }  
             if(result[0].country == "FI"){
                result[0].country = "Finlandia";
             }  
             if(result[0].country == "PH"){
                result[0].country = "Filipinas";
             }  
             if(result[0].country == "FO"){
                result[0].country = "Islas Feroe";
             }

             https://www.sanidad.gob.es/ciudadanos/saludAmbLaboral/docs/codigoIsoPai.pdf



            console.log(result);

            
            document.getElementById("ciudad").innerHTML = "Ciudad: " + (result[0].name);
            document.getElementById("pais").innerHTML = "País: " + (result[0].country);
            document.getElementById("población").innerHTML = "Población: " + (result[0].population);
            document.getElementById("latitud").innerHTML = "Latitud: " + (result[0].latitude);
            document.getElementById("longitud").innerHTML = "Longitud: " + (result[0].longitude);
            document.getElementById("región").innerHTML = "Región: " + (result[0].region);

            if((result[0].is_capital) == true){
                document.getElementById("capital").innerHTML = "Es la capital de " + (result[0].country)
            }else{
                document.getElementById("capital").style.display = "none";
            }
            


        },
        error: function ajaxError(jqXHR) {
            console.error('Error:', jqXHR.responseText);
        }
    });

    
})



