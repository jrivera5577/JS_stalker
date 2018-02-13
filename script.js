let userFirstName = prompt("What is your first name?");
let userLastName = prompt("What is your last name?");
let userAge = prompt("Ermmm...how old are you?");
let daysAlive =(userAge * 365);
let minutesAlive = (daysAlive * 1440);
document.write("Nice to meet you " + userFirstName + " " + userLastName +". \nYou look great for " + userAge + " years old.");
document.write("You've been alive for roughly " + daysAlive + " days and " + minutesAlive + " minutes.");
