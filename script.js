

let age = 18;
let isfemale = true;
let driverStatus = "bob";
let myAge = 24;
let totalAmount = 50;

//testdata
/*
let age = 16;
let isfemale = false;
let driverStatus = "bb"; 
let myAge = 100;
let totalAmount = 100;
*/

if (age == 19) {

    console.log("toegang geaccepteerd, u bent 18 jaar");

} else if (age > 18) {

    console.log("toegang geaccepteerd, u bent ouder dan 18 jaar");
} else {

    console.log("u bent jonger dan 18 jaar, u wordt vriendelijk verzocht buiten te blijven");
}

//kan ook age=>18)


if (isfemale) {
    console.log("welkom bij ladiesnight");

} else {
    console.log("Helaas is het vandaag ladiesnight, kom de volgende keer terug")
}





if (driverStatus === "bob") {

    console.log("u mag autorijden");

} else {
    console.log("u mag niet rijden");
}


if (myAge >= 18 && myAge <= 25) {

    console.log("Je krijgt 50% korting!");
}

let firstName = "Henk";

if (firstName == "Bram" || firstName == "Sarah") {
    console.log("gratis bier");
} else {
    console.log("geen gratis bier");
}



if (totalAmount <= 25) {

    console.log("Helaas, u krijgt niks");

} else if (totalAmount > 25 && totalAmount <= 50) {
    console.log("U krijgt gratis (vega)bitterballen");

} else if (totalAmount > 50 && totalAmount < 100) {
    console.log("U krijgt gratis portie nachos");

}
else {
    console.log("U krijgt gratis fles champagne");
}