// Objects

// Exercise 3 (Extra Practice):

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');

  if (name in reservations){
    if(reservations[name].claimed){
        alert("Hmm, someone already claimed this reservation")
    }else{
        alert("Welcome to the resturant!")
    }
  }else{
    alert("You have no reservation")
}