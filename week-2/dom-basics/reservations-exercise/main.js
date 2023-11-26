
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }

const input = document.getElementById("input");

const onClick = function(){
    let val = input.value
    checkReservations(val)
}

const checkReservations = function(name){
    if (name in reservations){
        if(reservations[name].claimed){
            alert("Hmm, someone already claimed this reservation")
        }else{
            alert("Welcome to the resturant!")
        }
      }else{
        alert("You have no reservation")
    }
}