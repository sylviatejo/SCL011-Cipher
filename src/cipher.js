window.cipher = {
  encode: (message, offset) => {

//Declaro el BUCLE FOR PARA CIFRADO

let outterMessage = ""; //Le doy el espacio en cadena a lo que se tiene que imprimir con innertHTML

for (let i = 0; i < message.length; i++){ /* Bucle inicia en 0 por ser posición inicial de A. Mientras sea menor al mensaje,
    se continúa ejecutando. Recorre de uno en uno las letras.*/
    
    if (message.charCodeAt(i)>=65 && message.charCodeAt(i)<=90) {

     let asciiNum = message.charCodeAt(i); //Variable que entrega el valor del mensaje en ASCII 
     let cipher = ((parseInt(asciiNum) - 65 + offset) % 26 + 65); /* Entrega los valores ASCII CIFRADOS con offset. Parseint se aplica sobre asciiNum para transformarlos en números */
     let cipherAbc = String.fromCharCode(cipher); //Pasa el mensaje Cifrado ASCII a Abecedario Normal.
     outterMessage+=cipherAbc //Concatena lo que toma de cipherAbc para imprimirlo en outText
    //outText.innerHTML=outterMessage; // Imprimo el resultado de cipherABC en outText
    }
    else if (message.charCodeAt(i)===32) {

        let asciiNum = message.charCodeAt(i)
        let newStr = String.fromCharCode(asciiNum);
        outterMessage+=newStr
        //outText.innerHTML=outterMessage;
      }
  }
    return outterMessage
  },
  decode: (message, offset) => {

//Declaro el BUCLE FOR PARA DECIFRADO

let outterMessage = ""; //Le doy el espacio en cadena a lo que se tiene que imprimir con innertHTML

for (let x = 0; x < message.length; x++){ /* Bucle inicia en 0 por ser posición inicial de A. Mientras sea menor al mensaje,
    se continúa ejecutando. Recorre de uno en uno las letras.*/
    
    if (message.charCodeAt(x)>=65 && message.charCodeAt(x)<=90) {

    let asciiNumD = message.charCodeAt(x); //Variable que entrega el valor del mensaje en ASCII CIFRADO
     let deCipher = ((parseInt(asciiNumD) + 65 - offset) % 26 + 65); /* Entrega los valores ASCII CIFRADOS con offset. Parseint se aplica sobre asciiNum para transformarlos en números */
     let cipherAbcD = String.fromCharCode(deCipher); //Pasa el mensaje Cifrado ASCII a Abecedario Normal.
     outterMessage+=cipherAbcD //Concatena lo que toma de cipherAbcD para imprimirlo en outText
     //outText.innerHTML=outterMessage; // Imprimo el resultado de cipherAbcD en outText
    }
    else if (message.charCodeAt(x)===32) {

        let asciiNumD = message.charCodeAt(x)
        let newStr = String.fromCharCode(asciiNumD);
        outterMessage+=newStr
        //outText.innerHTML=outterMessage;
      }
  }
  return outterMessage;
  }
};
