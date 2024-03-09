document.addEventListener("DOMContentLoaded", function() {
    const HSP = 3.97;
    const PD = 0.5;
    const nsist = 0.75;
    const fs = 1.2;
    const pot = 152; //panel de 200w sunlake monocristalino
    const vbat=12; // 

    document.getElementById('dato').addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener el valor del campo monto_energia
        const montoEnergia = parseFloat(document.getElementById('monto_energia').value);
        // Mostrar el valor en el div "resultado" dentro de "energia"
        const resultadoE = document.getElementById('resultado');
        resultadoE.textContent = `Monto de energía diario: ${(montoEnergia / 30) * 1000} Wh`;

        // Calcular y mostrar los resultados para 12V
        const r12V = calcularResultados(12, montoEnergia);
        mostrarResultados('result_12V', r12V);

        // Calcular y mostrar los resultados para 24V
        const r24V = calcularResultados(24, montoEnergia);
        mostrarResultados('result_24V', r24V);

        // Calcular y mostrar los resultados para 48V
        const r48V = calcularResultados(48, montoEnergia);
        mostrarResultados('result_48V', r48V);
    });

    // Función para calcular los resultados
    function calcularResultados(voltage, montoEnergia) {
        // Aquí realizas los cálculos específicos para cada voltaje utilizando las constantes
        const energiaDiaria = (montoEnergia / 30) * 1000;
        const cantidadPaneles = Math.ceil(energiaDiaria / (voltage * HSP * nsist));
        const cantidadBaterias = Math.ceil((energiaDiaria * fs) / (voltage * PD * 300));
        const potenciaInversor = Math.ceil(energiaDiaria / (voltage * 0.8)); // Suponiendo una eficiencia del inversor del 80%
        const cantidadControladores = Math.ceil(cantidadPaneles / 10); // Suponiendo 1 controlador por cada 10 paneles

        // Retorna un objeto con los resultados
        return {
            cantidadPaneles: cantidadPaneles,
            cantidadBaterias: cantidadBaterias,
            potenciaInversor: potenciaInversor,
            cantidadControladores: cantidadControladores
        };
    }

    // Función para mostrar los resultados en el HTML
    function mostrarResultados(idElemento, resultados) {
        const elemento = document.getElementById(idElemento);
        elemento.innerHTML = `
            <h3>Resultados para ${idElemento}</h3>
            <p>Cantidad de paneles: ${resultados.cantidadPaneles}</p>
            <p>Cantidad de baterías de 300Ah: ${resultados.cantidadBaterias}</p>
            <p>Potencia del inversor (W): ${resultados.potenciaInversor}</p>
            <p>Cantidad de controladores: ${resultados.cantidadControladores}</p>
        `;
    }
});