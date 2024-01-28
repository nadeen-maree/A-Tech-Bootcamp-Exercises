import React from 'react'
import { Drink } from './Drink'

export const Drinks = ({drinksData}) => {
    console.log(drinksData)
  return (
    <div>
      {drinksData.map((d, index) => <Drink props = {d} key = {index}/>)}
    </div>
  )
}