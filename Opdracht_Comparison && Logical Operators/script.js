const age = 35;
const firstName = "Sarah";
const totalAmount = 25;

if (age > 17) {
    console.log("Je mag naar binnen")
}
else {
    console.log("Je mag niet naar binnen")
}

let isFemale = true;
if (isFemale) {
    console.log("Je bent vrouw")
}
else {
    console.log("Helaas, je bent van het mindere geslacht")
}

let driverStatus = "bob";
if (driverStatus == "bob") {
    console.log("Je mag naar huis")
}
else {
    console.log("Je blijft hier slapen")
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
}

if (firstName === "Bram" || firstName === "Sarah") {
    console.log("Je hebt recht op een gratis biertje op deze feestelijke dag.")
}

if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Je krijgt gratis (vega)bitterballen")
}
else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Je krijgt gratis nachos")
}

else if (totalAmount >= 100) {
    console.log("Je krijgt gratis champi")
}