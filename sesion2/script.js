
//contro de flujo if else

var time= 22;
var greeting;

if (time<12) {
    greeting="Buenos Días"
} else if (time >=12 && time<20) {
    greeting="Buenas Tardes"
} else if (time>=20  && time <24){
    greeting="Buenas Noches"
} else{
    greeting="la hora no existe"
}


console.log(greeting)

var day =2
var text;
//contro de switch
switch (day) {
    case 0 :
        text="domingo"
        break;
    case 1 :
        text="lunes"
        break;
    case 2 :
        text="martes"
        break;
    case 3 :
        text="miercoles"
        break;
    case 4 :
        text="jueves"
        break;
    case 5 :
        text="viernes"
        break;
    case 6 :
        text="sabado"
        break;
    default:
        text="El dia no Exite"
        break;
}
console.log(text)



//ejemplo operador terniario

var speed=115;
//var messaje;
//var messaje= speed >100? "vas muy rapido": "estas debajo del limite"

//if (speed>120) {
//    messaje="vas volando";
//} else if(speed>100 && speed<=120){
//    messaje= "vas muy rapido";
//} else{
//    messaje="vas debajo del limite"
//}

//console.log(messaje)

//lo e arriba se puede escribir asi
//var speed=101;
//var messaje= speed >100? "vas muy rapido": "estas debajo del limite"   ---->aqui es solo con un if else

var messaje = speed > 120 ? "Vas Volando"
    : (
        speed > 100 && speed <= 120 ? "vas muy rapido"
        : "vas debajo del limite"
    )
console.log(messaje)



//ejemplo truthy / falsy

if (0) {
    messaje1 = "truthy";
} else {
    messaje1 = "falsy";
}console.log(messaje1)


//Bucles (ciclos)

for (var index = 0; index <10; index++) {
    console.log("hola mundo ", index);
}

var i=0;

while (i<100) {
    if (i===10) {
        break;
    }
    if (i<50) {
        console.log("hola mundo", i, "primeros 50")
    } else{
        console.log("hola mundo", i, "ultimos 50")
    }
    i++;
}


//ejercicio
var j=0;
var messaje2

for(j=0 ; j<=50; j++){
    messaje2=j*2;
    console.log(messaje2)
}
