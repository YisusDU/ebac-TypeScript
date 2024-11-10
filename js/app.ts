// Función principal para calcular la edad de una persona según su fecha de nacimiento
const getAge = (dateBorn: string) => {
    // Convertimos la fecha de nacimiento a un objeto Date
    const born = new Date(dateBorn);
    const today = new Date();

    // Validamos si la fecha de nacimiento es válida
    if (isNaN(born.getTime())) {
        return console.log('Fecha de nacimiento inválida');
    }

    // Calculamos el tiempo transcurrido entre la fecha de nacimiento y la fecha actual
    // Diferencia de años
    let age = today.getFullYear() - born.getFullYear();
    // Diferencia de meses
    let monthDiff = today.getMonth() - born.getMonth();
    // Diferencia de días
    let dayDiff = today.getDate() - born.getDate();

    // Hacemos la validación para el mes y el año
    // Primero verificamos si el mes actual es menor que el mes de nacimiento o el mismo mes
    // Después validamos si el día actual es anterior al día de nacimiento
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Calculamos los meses restantes
    let totalMonths = monthDiff < 0 ? monthDiff + 12 : monthDiff;
    if (dayDiff < 0) {
        totalMonths--;
    }

    // Retornamos la edad calculada
    return console.log(`Tu edad actual es ${age} años y ${totalMonths} meses.`);
}

// Llamadas a la función con diferentes fechas de nacimiento
getAge("2003-01-03");
getAge("2001-08-26");
getAge("1978-07-06");