import React from 'react';
import styled from 'styled-components';

import { Ingredient } from '../types';
import { P1 } from '../styles/font-styles';

interface IProps {
  ingredient: Ingredient
}

const IngredientItem = (props: IProps) => {
  return (
    <div className="row">
      <div className="col-6">
        <P1>{props.ingredient.Name}</P1>
      </div>
      <div className="col-6">
        <P1>{props.ingredient.Quantity} {props.ingredient.Unit}</P1>
      </div>
    </div>
  )
}

export default IngredientItem;