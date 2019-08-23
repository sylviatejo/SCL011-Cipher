let message // Declaro variable que guarda el valor que se ingrese en el textarea
let offset ;// Declaro variable que guarda el número que ingrese el usuario
const outText = document.getElementById("outText")

//Comienzo por darle utilidad al Botón "ENVIAR CLAVE"

document.getElementById("sendOffset").addEventListener("click", /* Le digo al documento que el botón ENVIAR CLAVE va a escuchar un
//evento y que al hacer click se ejecutará mi función */
() => {
    offset = Number.parseInt(document.getElementById("offsetNumber").value);
     //Función que guarda el valor de offset.
})

//Doy utilidad al Botón "CIFRAR"

document.getElementById("code").addEventListener("click", /* Le digo al documento que el botón CIFRAR va a escuchar un
evento y que al hacer click se ejecutará mi función */
() => {
    message = document.getElementById("inText").value
    outText.innerHTML = window.cipher.encode(message,offset)
}); //Función que guarda el valor de message.

//Doy utilidad al Botón "DECIFRAR"

document.getElementById("decode").addEventListener("click", /* Le digo al documento que el botón DECIFRAR va a escuchar un
evento y que al hacer click se ejecutará mi función */
() => {
    
    message = document.getElementById("inText").value //Función que guarda el valor de message.
    outText.innerHTML = window.cipher.decode(message,offset)
    
})
    
