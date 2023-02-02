// Guest List
var guestList = ["mark","dara","peter","bolu","angela","baah","williams"];
var guestName = prompt("Enter your name:");
if (guestList.includes(guestName) == true){
    alert(guestName + " is in the guest list.");
} else{
    alert(guestName + " is not in the guest list.");
}