import React from 'react';
import { Recipe } from '../types';
import IngredientItem from './IngredientItem';
import styled from 'styled-components';
import { P1 } from '../styles/font-styles';

interface IProps {
  recipe: Recipe
}

const RecipeListItem = (props: IProps) => {
  if (!props.recipe) {
    return null;
  }
  return (
    <RecipeRow className="row">
      <div className="col-sm-6">
        <P1>{props.recipe.Name}</P1>
      </div>
      <div className="col-sm-6">
        <P1>{props.recipe.DateCreated}</P1>
      </div>
    </RecipeRow>
  )
}

// {
//   props.recipe.Ingredients &&
//   props.recipe.Ingredients.map((ingredient, idx) => (
//     <IngredientItem ingredient={ingredient} />
//   ))
// }

const RecipeRow = styled.div`
  margin: 10px 0px;
  border-radius: 10px;
  background-color: white;
`;

export default RecipeListItem;