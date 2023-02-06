alert("Bienvenido a mi pagina Web")
function sumarArray(numeros) {
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
    suma += numeros[i];
    }
    return suma;
   }
   console.log(sumarArray([1,2,3,4,5]));
