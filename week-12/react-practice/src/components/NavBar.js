import React from 'react'
import { useState } from 'react'
import { Drink } from './Drink'
import { Drinks } from './Drinks'

export const NavBar = () => {

    const [drinksData, setDrinksData] = useState(
        [
           {"name": "Cola Classic", "price": 1.99, "company": "FizzyPop Inc.", "category": "Soda"},
           {"name": "Mountain Mist", "price": 2.05, "company": "Green Valley Beverages", "category": "Soda"},
           {"name": "Lemon Sparkle", "price": 1.85, "company": "CitrusFizz", "category": "Soda"},
           {"name": "Pure Spring Water", "price": 0.99, "company": "AquaPure", "category": "Water"},
           {"name": "Berry Blast Smoothie", "price": 3.50, "company": "Smoothie King", "category": "Smoothie"},
           {"name": "Tropical Mango Tea", "price": 2.25, "company": "TeaTime", "category": "Tea"},
           {"name": "Classic Espresso", "price": 2.75, "company": "BeanBrew", "category": "Coffee"},
           {"name": "Vanilla Latte", "price": 3.00, "company": "BeanBrew", "category": "Coffee"},
           {"name": "Zero Sugar Cola", "price": 2.00, "company": "FizzyPop Inc.", "category": "Sugar Free"},
           {"name": "Green Tea", "price": 2.00, "company": "TeaTime", "category": "Tea"},
           {"name": "Organic Apple Juice", "price": 2.50, "company": "Nature's Best", "category": "Juice"},
           {"name": "Raspberry Lemonade", "price": 2.20, "company": "CitrusFizz", "category": "Lemonade"}
       ])

       const show = () => {
            let newDrinkData = drinksData
            setDrinksData(newDrinkData)
       }

  return (
    <div>
        <button onClick={show}>All</button>
        <Drinks drinksData= {drinksData}/>
    </div>
  )
}
