  // Exercise 6 - Extension 1:

  const coffeeShop = {
    beans: 40,
    money: 100, // Initial amount of money
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      // Method implementation for making drinks...
    },
  
    buyBeans: function (numBeans) {
      const costPerBean = 1; // Cost of each bean ($1 in this example)
      const totalCost = numBeans * costPerBean;
  
      if (this.money >= totalCost) {
        this.beans += numBeans;
        this.money -= totalCost;
        console.log(`Purchased ${numBeans} beans for $${totalCost}.`);
      } else {
        console.log("Not enough money to buy beans.");
      }
    }
  };
  
  // Buying 20 beans
  coffeeShop.buyBeans(20);
  console.log(`Current beans: ${coffeeShop.beans}`); // Current number of beans after purchase
  console.log(`Remaining money: $${coffeeShop.money}`); // Remaining money after purchase


  
  
