import React from 'react';
import styled from 'styled-components';

import { Ingredient } from '../types';
import { H2 } from '../styles/font-styles';

interface IProps {
  ingredient: Ingredient
}

const IngredientItem = (props: IProps) => {
  return (
    <div className="row">
      <div className="col-6">
        <p>{props.ingredient.Name}</p>
      </div>
      <div className="col-6">
        <p>{props.ingredient.Quantity} {props.ingredient.Unit}</p>
      </div>
    </div>
  )
}

export default IngredientItem;