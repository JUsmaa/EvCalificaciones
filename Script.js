function calcularPromedioPonderado() {
    let sumaPonderada = 0;
    let sumaPesos = 0;
    let i = 0;
    while (i <= 5) {
        let materia = prompt("Ingrese el nombre de la materia (o 'fin' para terminar):");

        if (materia.toLowerCase() === 'fin') {
            break;
        }

        let calificacion = parseFloat(prompt(`Ingrese la calificación para ${materia}:`));
        let peso = parseFloat(prompt(`Ingrese el peso para ${materia}:`));
        sumaPonderada += calificacion * peso;
        sumaPesos += peso;


        if (sumaPesos === 0) {
            console.log("Error: La suma de los pesos no puede ser cero.");
            return;
        }

        let promedioPonderado = sumaPonderada / sumaPesos;
        console.log("El promedio ponderado es: " + promedioPonderado.toFixed(2));
        if (promedioPonderado >= 3.5) {
            console.log("El estudiante ha aprobado.");
        } else if (promedioPonderado < 2.5) {
            console.log("El estudiante debe repetir el curso.");
        } else {
            console.log("El estudiante ha quedado en condición de revisión.");
        }
    }
}

calcularPromedioPonderado();
