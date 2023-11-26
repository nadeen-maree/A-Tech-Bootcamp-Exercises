// Objects

// Exercise 3.2:

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation').toLowerCase();

  const reservationsLowerCase = {};
for (let key in reservations) {
    reservationsLowerCase[key.toLowerCase()] = reservations[key];
}

if (name in reservationsLowerCase) {
    if (reservationsLowerCase[name].claimed) {
        alert("Hmm, someone already claimed this reservation");
    } else {
        alert("Welcome to the restaurant!");
    }
}else{
    reservations[name] = {claimed: true}
}
