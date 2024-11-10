// Función principal para calcular la edad de una persona según su fecha de nacimiento
var getAge = function (dateBorn) {
    // Convertimos la fecha de nacimiento a un objeto Date
    var born = new Date(dateBorn);
    var today = new Date();
    // Validamos si la fecha de nacimiento es válida
    if (isNaN(born.getTime())) {
        return console.log('Fecha de nacimiento inválida');
    }
    // Calculamos el tiempo transcurrido entre la fecha de nacimiento y la fecha actual
    // Diferencia de años
    var age = today.getFullYear() - born.getFullYear();
    // Diferencia de meses
    var monthDiff = today.getMonth() - born.getMonth();
    // Diferencia de días
    var dayDiff = today.getDate() - born.getDate();
    // Hacemos la validación para el mes y el año
    // Primero verificamos si el mes actual es menor que el mes de nacimiento o el mismo mes
    // Después validamos si el día actual es anterior al día de nacimiento
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    // Calculamos los meses restantes
    var totalMonths = monthDiff < 0 ? monthDiff + 12 : monthDiff;
    if (dayDiff < 0) {
        totalMonths--;
    }
    // Retornamos la edad calculada
    return console.log("Tu edad actual es ".concat(age, " a\u00F1os y ").concat(totalMonths, " meses."));
};
// Llamadas a la función con diferentes fechas de nacimiento
getAge("2003-01-03");
getAge("2001-08-26");
getAge("1978-07-06");
