import React from 'react';
import { Ingredient } from '../types';

interface IProps {
  ingredient: Ingredient
}

const IngredientItem = (props: IProps) => {
  return (
    <div>
      <h2>{props.ingredient.Name}</h2>
      <p>{props.ingredient.Quantity} {props.ingredient.Unit}</p>
    </div>
  )
}

export default IngredientItem;