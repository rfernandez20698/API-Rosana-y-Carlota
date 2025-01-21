document.getElementById("hola").style.display = "none";
document.getElementById("resultado").style.display = "none";

document.getElementById("añadir").addEventListener('click', function(){
    let name = document.getElementById("name").value
    document.getElementById("body").style = 'background-color: #a29ffe'
       
    
    
   
    

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/city?name='+name,
        headers: { 'X-Api-Key': '0sYi5iZnSZ75r99W8IcI0Q==CKN88fC7nDTLS6rg'},
        contentType: 'application/json',
        success: function(result) {
        
         if (result[0].country == "AF") {
            result[0].country = "Afganistán";
         }
         if (result[0].country == "AL") {
            result[0].country = "Albania";
         }
         if (result[0].country == "DE") {
            result[0].country = "Alemania";
         }
         if (result[0].country == "AD") {
            result[0].country = "Andorra";
         }
         if (result[0].country == "AO") {
            result[0].country = "Angola";
         }
         if (result[0].country == "AI") {
            result[0].country = "Anguila";
         }
         if (result[0].country == "AQ") {
            result[0].country = "Antártida";
         }
         if (result[0].country == "AG") {
            result[0].country = "Antigua y Barbuda";
         }
         if (result[0].country == "AR") {
            result[0].country = "Argentina";
         }
         if (result[0].country == "AM") {
            result[0].country = "Armenia";
         }
         if (result[0].country == "AW") {
            result[0].country = "Aruba";
         }
         if (result[0].country == "AU") {
            result[0].country = "Australia";
         }
         if (result[0].country == "AT") {
            result[0].country = "Austria";
         }
         if (result[0].country == "AZ") {
            result[0].country = "Azerbaiyán";
         }
         if (result[0].country == "BS") {
            result[0].country = "Bahamas";
         }
         if (result[0].country == "BH") {
            result[0].country = "Bahréin";
         }
         if (result[0].country == "BD") {
            result[0].country = "Bangladesh";
         }
         if (result[0].country == "BB") {
            result[0].country = "Barbados";
         }
         if (result[0].country == "BY") {
            result[0].country = "Bielorrusia";
         }
         if (result[0].country == "BE") {
            result[0].country = "Bélgica";
         }
         if (result[0].country == "BZ") {
            result[0].country = "Belice";
         }
         if (result[0].country == "BJ") {
            result[0].country = "Benín";
         }
         if (result[0].country == "BM") {
            result[0].country = "Bermudas";
         }
         if (result[0].country == "BT") {
            result[0].country = "Bután";
         }
         if (result[0].country == "BO") {
            result[0].country = "Bolivia";
         }
         if (result[0].country == "BA") {
            result[0].country = "Bosnia y Herzegovina";
         }
         if (result[0].country == "BW") {
            result[0].country = "Botsuana";
         }
         if (result[0].country == "BR") {
            result[0].country = "Brasil";
         }
         if (result[0].country == "BN") {
            result[0].country = "Brunéi";
         }
         if (result[0].country == "BG") {
            result[0].country = "Bulgaria";
         }
         if (result[0].country == "BF") {
            result[0].country = "Burkina Faso";
         }
         if (result[0].country == "BI") {
            result[0].country = "Burundi";
         }
         if (result[0].country == "CV") {
            result[0].country = "Cabo Verde";
         }
         if (result[0].country == "KH") {
            result[0].country = "Camboya";
         }
         if (result[0].country == "CM") {
            result[0].country = "Camerún";
         }
         if (result[0].country == "CA") {
            result[0].country = "Canadá";
         }
         if (result[0].country == "TD") {
            result[0].country = "Chad";
         }
         if (result[0].country == "CL") {
            result[0].country = "Chile";
         }
         if (result[0].country == "CN") {
            result[0].country = "China";
         }
         if (result[0].country == "CY") {
            result[0].country = "Chipre";
         }
         if (result[0].country == "CO") {
            result[0].country = "Colombia";
         }
         if (result[0].country == "KM") {
            result[0].country = "Comoras";
         }
         if (result[0].country == "CG") {
            result[0].country = "Congo";
         }
         if (result[0].country == "CD") {
            result[0].country = "Congo (República Democrática)";
         }
         if (result[0].country == "KR") {
            result[0].country = "Corea del Sur";
         }
         if (result[0].country == "KP") {
            result[0].country = "Corea del Norte";
         }
         if (result[0].country == "CI") {
            result[0].country = "Costa de Marfil";
         }
         if (result[0].country == "CR") {
            result[0].country = "Costa Rica";
         }
         if (result[0].country == "HR") {
            result[0].country = "Croacia";
         }
         if (result[0].country == "CU") {
            result[0].country = "Cuba";
         }
         if (result[0].country == "DK") {
            result[0].country = "Dinamarca";
         }
         if (result[0].country == "DM") {
            result[0].country = "Dominica";
         }
         if (result[0].country == "EC") {
            result[0].country = "Ecuador";
         }
         if (result[0].country == "EG") {
            result[0].country = "Egipto";
         }
         if (result[0].country == "SV") {
            result[0].country = "El Salvador";
         }
         if (result[0].country == "AE") {
            result[0].country = "Emiratos Árabes Unidos";
         }
         if (result[0].country == "ER") {
            result[0].country = "Eritrea";
         }
         if (result[0].country == "SK") {
            result[0].country = "Eslovaquia";
         }
         if (result[0].country == "SI") {
            result[0].country = "Eslovenia";
         }
         if (result[0].country == "ES") {
            result[0].country = "España";
         }
         if (result[0].country == "US") {
            result[0].country = "Estados Unidos";
         }
         if (result[0].country == "EE") {
            result[0].country = "Estonia";
         }
         if (result[0].country == "ET") {
            result[0].country = "Etiopía";
         }
         if (result[0].country == "PH") {
            result[0].country = "Filipinas";
         }
         if (result[0].country == "FI") {
            result[0].country = "Finlandia";
         }
         if (result[0].country == "FJ") {
            result[0].country = "Fiyi";
         }
         if (result[0].country == "FR") {
            result[0].country = "Francia";
         }
         if (result[0].country == "GA") {
            result[0].country = "Gabón";
         }
         if (result[0].country == "GM") {
            result[0].country = "Gambia";
         }
         if (result[0].country == "GE") {
            result[0].country = "Georgia";
         }
         if (result[0].country == "GH") {
            result[0].country = "Ghana";
         }
         if (result[0].country == "GI") {
            result[0].country = "Gibraltar";
         }
         if (result[0].country == "GR") {
            result[0].country = "Grecia";
         }
         if (result[0].country == "GL") {
            result[0].country = "Groenlandia";
         }
         if (result[0].country == "GD") {
            result[0].country = "Granada";
         }
         if (result[0].country == "GU") {
            result[0].country = "Guam";
         }
         if (result[0].country == "GT") {
            result[0].country = "Guatemala";
         }
         if (result[0].country == "GY") {
            result[0].country = "Guyana";
         }
         if (result[0].country == "HT") {
            result[0].country = "Haití";
         }
         if (result[0].country == "HN") {
            result[0].country = "Honduras";
         }
         if (result[0].country == "HK") {
            result[0].country = "Hong Kong";
         }
         if (result[0].country == "HU") {
            result[0].country = "Hungría";
         }
         if (result[0].country == "IN") {
            result[0].country = "India";
         }
         if (result[0].country == "ID") {
            result[0].country = "Indonesia";
         }
         if (result[0].country == "IQ") {
            result[0].country = "Irak";
         }
         if (result[0].country == "IR") {
            result[0].country = "Irán";
         }
         if (result[0].country == "IE") {
            result[0].country = "Irlanda";
         }
         if (result[0].country == "IS") {
            result[0].country = "Islandia";
         }
         if (result[0].country == "IL") {
            result[0].country = "Israel";
         }
         if (result[0].country == "IT") {
            result[0].country = "Italia";
         }
         if (result[0].country == "JM") {
            result[0].country = "Jamaica";
         }
         if (result[0].country == "JP") {
            result[0].country = "Japón";
         }
         if (result[0].country == "JO") {
            result[0].country = "Jordania";
         }
         if (result[0].country == "KZ") {
            result[0].country = "Kazajistán";
         }
         if (result[0].country == "KE") {
            result[0].country = "Kenia";
         }
         if (result[0].country == "KG") {
            result[0].country = "Kirguistán";
         }
         if (result[0].country == "KI") {
            result[0].country = "Kiribati";
         }
         if (result[0].country == "KW") {
            result[0].country = "Kuwait";
         }
         if (result[0].country == "LA") {
            result[0].country = "Laos";
         }
         if (result[0].country == "LS") {
            result[0].country = "Lesoto";
         }
         if (result[0].country == "LV") {
            result[0].country = "Letonia";
         }
         if (result[0].country == "LB") {
            result[0].country = "Líbano";
         }
         if (result[0].country == "LR") {
            result[0].country = "Liberia";
         }
         if (result[0].country == "LY") {
            result[0].country = "Libia";
         }
         if (result[0].country == "LI") {
            result[0].country = "Liechtenstein";
         }
         if (result[0].country == "LT") {
            result[0].country = "Lituania";
         }
         if (result[0].country == "LU") {
            result[0].country = "Luxemburgo";
         }
         if (result[0].country == "MO") {
            result[0].country = "Macao";
         }
         if (result[0].country == "MK") {
            result[0].country = "Macedonia del Norte";
         }
         if (result[0].country == "MG") {
            result[0].country = "Madagascar";
         }
         if (result[0].country == "MY") {
            result[0].country = "Malasia";
         }
         if (result[0].country == "MW") {
            result[0].country = "Malaui";
         }
         if (result[0].country == "MV") {
            result[0].country = "Maldivas";
         }
         if (result[0].country == "ML") {
            result[0].country = "Malí";
         }
         if (result[0].country == "MT") {
            result[0].country = "Malta";
         }
         if (result[0].country == "MA") {
            result[0].country = "Marruecos";
         }
         if (result[0].country == "MH") {
            result[0].country = "Islas Marshall";
         }
         if (result[0].country == "MU") {
            result[0].country = "Mauricio";
         }
         if (result[0].country == "MR") {
            result[0].country = "Mauritania";
         }
         if (result[0].country == "MX") {
            result[0].country = "México";
         }
         if (result[0].country == "FM") {
            result[0].country = "Micronesia";
         }
         if (result[0].country == "MD") {
            result[0].country = "Moldavia";
         }
         if (result[0].country == "MC") {
            result[0].country = "Mónaco";
         }
         if (result[0].country == "MN") {
            result[0].country = "Mongolia";
         }
         if (result[0].country == "ME") {
            result[0].country = "Montenegro";
         }
         if (result[0].country == "MS") {
            result[0].country = "Montserrat";
         }
         if (result[0].country == "MZ") {
            result[0].country = "Mozambique";
         }
         if (result[0].country == "MM") {
            result[0].country = "Myanmar";
         }
         if (result[0].country == "NA") {
            result[0].country = "Namibia";
         }
         if (result[0].country == "NR") {
            result[0].country = "Nauru";
         }
         if (result[0].country == "NP") {
            result[0].country = "Nepal";
         }
         if (result[0].country == "NI") {
            result[0].country = "Nicaragua";
         }
         if (result[0].country == "NE") {
            result[0].country = "Níger";
         }
         if (result[0].country == "NG") {
            result[0].country = "Nigeria";
         }
         if (result[0].country == "NO") {
            result[0].country = "Noruega";
         }
         if (result[0].country == "NZ") {
            result[0].country = "Nueva Zelanda";
         }
         if (result[0].country == "OM") {
            result[0].country = "Omán";
         }
         if (result[0].country == "NL") {
            result[0].country = "Países Bajos";
         }
         if (result[0].country == "PK") {
            result[0].country = "Pakistán";
         }
         if (result[0].country == "PW") {
            result[0].country = "Palaos";
         }
         if (result[0].country == "PA") {
            result[0].country = "Panamá";
         }
         if (result[0].country == "PG") {
            result[0].country = "Papúa Nueva Guinea";
         }
         if (result[0].country == "PY") {
            result[0].country = "Paraguay";
         }
         if (result[0].country == "PE") {
            result[0].country = "Perú";
         }
         if (result[0].country == "PL") {
            result[0].country = "Polonia";
         }
         if (result[0].country == "PT") {
            result[0].country = "Portugal";
         }
         if (result[0].country == "PR") {
            result[0].country = "Puerto Rico";
         }
         if (result[0].country == "QA") {
            result[0].country = "Catar"
         }
         if (result[0].country == "PM") {
            result[0].country = "San Pedro y Miquelón"
         }
         if (result[0].country == "VC") {
            result[0].country = "San Vicente y Las Granadinas"
         }
         if (result[0].country == "SH") {
            result[0].country = "Santa Elena"
         }
         if (result[0].country == "LC") {
            result[0].country = "Santa Lucía"
         }
         if (result[0].country == "ST") {
            result[0].country = "Santo Tomé y Príncipe"
         }
         if (result[0].country == "SN") {
            result[0].country = "Senegal"
         }
         if (result[0].country == "CS") {
            result[0].country = "Serbia y Montenegro"
         }
         if (result[0].country == "SC") {
            result[0].country = "Seychelles"
         }
         if (result[0].country == "SL") {
            result[0].country = "Sierra Leona"
         }
         if (result[0].country == "SG") {
            result[0].country = "Singapur"
         }
         if (result[0].country == "SY") {
            result[0].country = "Siria (República Árabe)"
         }
         if (result[0].country == "SO") {
            result[0].country = "Somalia"
         }
         if (result[0].country == "LK") {
            result[0].country = "Sri Lanka"
         }
         if (result[0].country == "SZ") {
            result[0].country = "Suazilandia"
         }
         if (result[0].country == "ZA") {
            result[0].country = "Sudáfrica"
         }
         if (result[0].country == "SD") {
            result[0].country = "Sudán"
         }
         if (result[0].country == "SE") {
            result[0].country = "Suecia"
         }
         if (result[0].country == "CH") {
            result[0].country = "Suiza"
         }
         if (result[0].country == "SR") {
            result[0].country = "Surinam"
         }
         if (result[0].country == "TH") {
            result[0].country = "Tailandia"
         }
         if (result[0].country == "TW") {
            result[0].country = "Taiwán"
         }
         if (result[0].country == "TZ") {
            result[0].country = "Tanzania"
         }
         if (result[0].country == "TJ") {
            result[0].country = "Tayikistán"
         }
         if (result[0].country == "PS") {
            result[0].country = "Territorio Palestino Ocupado"
         }
         if (result[0].country == "TF") {
            result[0].country = "Tierras Australes Francesas"
         }
         if (result[0].country == "TL") {
            result[0].country = "Timor Leste"
         }
         if (result[0].country == "TG") {
            result[0].country = "Togo"
         }
         if (result[0].country == "TK") {
            result[0].country = "Tokelau"
         }
         if (result[0].country == "TO") {
            result[0].country = "Tonga"
         }
         if (result[0].country == "TT") {
            result[0].country = "Trinidad y Tobajo"
         }
         if (result[0].country == "TN") {
            result[0].country = "Túnez"
         }
         if (result[0].country == "TC") {
            result[0].country = "Turcas y Caicos"
         }
         if (result[0].country == "TM") {
            result[0].country = "Turkmenistán"
         }
         if (result[0].country == "TR") {
            result[0].country = "Turquía"
         }
         if (result[0].country == "TV") {
            result[0].country = "Tuvalu"
         }
         if (result[0].country == "UA") {
            result[0].country = "Ucrania"
         }
         if (result[0].country == "UG") {
            result[0].country = "Uganda"
         }
         if (result[0].country == "UY") {
            result[0].country = "Uruguay"
         }
         if (result[0].country == "UZ") {
            result[0].country = "Uzbekistán"
         }
         if (result[0].country == "VU") {
            result[0].country = "Vanuatu"
         }
         if (result[0].country == "VA") {
            result[0].country = "Ciudad del Vaticano"
         }
         if (result[0].country == "VE") {
            result[0].country = "Venezuela"
         }
         if (result[0].country == "VN") {
            result[0].country = "Vietnam"
         }
         if (result[0].country == "VG") {
            result[0].country = "Islas Británicas"
         }
         if (result[0].country == "VI") {
            result[0].country = "Islas vírgenes de EEUU "
         }
         if (result[0].country == "WF") {
            result[0].country = "Islas Wallis y Futuna"
         }
         if (result[0].country == "YE") {
            result[0].country = "Yemen"
         }
         if (result[0].country == "ZM") {
            result[0].country = "Zambia"
         }
         if (result[0].country == "ZW") {
            result[0].country = "Zimbabue"
         }
         if (result[0].country == "RU") {
            result[0].country = "Rusia"
         }
            console.log(result);
            document.getElementById("resultado").style.display = "block";
           
            document.getElementById("ciudad").innerHTML = "Ciudad: " + (result[0].name) +".";
            document.getElementById("pais").innerHTML = "País: " + (result[0].country) +".";
            document.getElementById("población").innerHTML = "Población: " + (result[0].population) +" hab.";
            document.getElementById("latitud").innerHTML = "Latitud: " + (result[0].latitude) +"º.";
            document.getElementById("longitud").innerHTML = "Longitud: " + (result[0].longitude) +"º.";

            if((result[0].is_capital) == true){
                document.getElementById("capital").innerHTML = "Es la capital de " + (result[0].country) +".";
            }else{
                document.getElementById("capital").style.display = "none";
            }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error:', jqXHR.responseText);
        }
    });
})


document.getElementById("buscadorporpais").addEventListener('click', function(){   
   document.getElementById("buscarporciudad").style.display = "none";
   document.getElementById("hola").style.display = "block";
   document.getElementById("body").style = 'background-color: #ff553b';

   
      
  

document.getElementById("buscarporpais").addEventListener('click', function(){
   let pais = document.getElementById("paisname").value;
   document.getElementById("body").style = 'background-color: #bffe9f';
   
   

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/country?name='+pais,
        headers: { 'X-Api-Key': '0sYi5iZnSZ75r99W8IcI0Q==CKN88fC7nDTLS6rg'},
        contentType: 'application/json',
        success: function(result) {

         

            console.log(result);

            
            document.getElementById("capital2").innerHTML = "Capital: " + (result[0].capital) +".";
            document.getElementById("pais2").innerHTML = "País: " + pais;
            document.getElementById("region2").innerHTML = "Región: " + (result[0].region) +".";
            document.getElementById("population2").innerHTML = "Población: " + (result[0].population) +" mil hab.";
            document.getElementById("tourists2").innerHTML = "Turistas: " + (result[0].tourists) +" mil.";
            document.getElementById("unemployment2").innerHTML = "Paro: " + (result[0].unemployment) +" mil.";
            document.getElementById("co2_emissions").innerHTML = "Emisiones de CO2: " + (result[0].co2_emissions) +" MT."; 
            document.getElementById("moneda2").innerHTML = "Moneda: " + (result[0].currency.name) +".";

            

        },
        error: function ajaxError(jqXHR) {
            console.error('Error:', jqXHR.responseText);
        }
    });
})

})




fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(datos => {
        let banderas = ''
        for (let pais of datos) {
            banderas += `<div class="tarjeta"><img src="${pais.flags.png}">
                    
               </div>`
        }
        const elemento = document.querySelector("#banderas")
        elemento.innerHTML = banderas
    })