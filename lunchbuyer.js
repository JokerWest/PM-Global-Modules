// Who's buying lunch
function lunchBuyer(){
    var buyer = Math.floor(Math.random() * guestList.length);
    return guestList[buyer] + " is going to buy lunch today!"
 }