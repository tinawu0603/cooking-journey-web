import React from 'react';
import { Recipe } from '../types';
import { Link } from 'react-router-dom';
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
    <RecipeRow>
      <RecipeLink to={`/recipes/${props.recipe.Id}`} className="row">
        <div className="col-sm-6">
          <P1>{props.recipe.Name}</P1>
        </div>
        <div className="col-sm-6">
          <P1>{getDate(props.recipe.DateCreated)}</P1>
        </div>
      </RecipeLink>
    </RecipeRow>
  )
}

function getDate (date: Date): string {
  const _date = new Date(date);
  return `${_date.getFullYear()}-${_date.getMonth() + 1}-${_date.getDate()}`;
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

const RecipeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default RecipeListItem;