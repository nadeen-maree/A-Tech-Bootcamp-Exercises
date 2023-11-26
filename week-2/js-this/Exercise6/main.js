
  // Exercise 6:

  const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      let amountOfBeans = this.beans;
      let drinkFound = false;
  
      for (const drink in this.drinkRequirements) {
        if (drinkType === drink) {
          drinkFound = true;
          const requiredBeans = this.drinkRequirements[drink];
  
          if (amountOfBeans >= requiredBeans) {
            amountOfBeans -= requiredBeans;
            this.beans = amountOfBeans;
            if (amountOfBeans === 0) {
              alert("Sorry, we're all out of beans");
            }
          } else {
            console.log("Sorry, we're all out of beans!");
          }
        }
      }
      if (!drinkFound) {
        console.log(`Sorry, we don't make ${drinkType}`);
      }
    }
  };
  
  coffeeShop.makeDrink("latte");
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); // should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); // should alert/console "Sorry, we're all out of beans"
  
  
