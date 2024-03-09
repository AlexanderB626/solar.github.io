document.addEventListener("DOMContentLoaded", function() {

    const volt = 12;
    const HSP = 3.97;
    const PD= 0.5;
    const nsist=0.75;
    const fs=1.2;
    const pot=152;
    document.getElementById('dato').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener el valor del campo monto_energia
        const montoEnergia = parseFloat(document.getElementById('monto_energia').value);

        // Mostrar el valor en el div "resultado" dentro de "energia"
        const resultadoE = document.getElementById('resultado');
        resultadoE.textContent = `Monto de energía diario: ${(montoEnergia / 30) * 1000} Wh`;

        // Realizar operaciones matemáticas y mostrar resultados en el div "dimensionarResultado" dentro de "dimensionar"
        //r1: 
        const r1 = ((((montoEnergia / 30) * 1000) * fs) / (volt * PD)) / 300; // Ejemplo de operación
        const r2 = document.getElementById('dimensionarResultado');
        r2.textContent = `Cantidad de baterias de 12v: ${r1} bat de 300Ah`;

      // Realizar operaciones adicionales utilizando el valor de r2
      const r3 = r2 * 2; // Ejemplo de operación con r2
      const r4 = r1 + 10; // Otro ejemplo de operación con r2

      // Mostrar los resultados adicionales
      const r3Div = document.getElementById('r3');
      r3Div.textContent = `Resultado de operación con r2: ${r3}`;

      const r4Div = document.getElementById('r4');
      r4Div.textContent = `Otro resultado de operación con r2: ${r4}`;
        
    });
});
//
/*hecho con una peticion de tipo post,
https://www.freecodecamp.org/espanol/news/fetch-api-como-realizar-un-get-request-y-un-post-request-en-javascript/
https://mockapi.io/
guardar en mockapi

recomendar algo como react
https://www.freecodecamp.org/espanol/news/fetch-api-como-realizar-un-get-request-y-un-post-request-en-javascript/
una libreria recomendable
https://mui.com/material-ui/react-stepper/

https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa
https://www.w3schools.com/jsref/prop_html_style.asp
*/