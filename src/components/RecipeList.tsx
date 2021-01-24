import React from 'react';
import { Recipe } from '../types';
import RecipeListItem from './RecipeListItem';
import { P1 } from '../styles/font-styles';
import styled from 'styled-components';

interface IProps {
  recipes: Recipe[]
}

const RecipeList = (props: IProps) => {
  if (!props.recipes) {
    return (
      <RecipeListDiv>
        <P1>You do not have any recipes right now</P1>
      </RecipeListDiv>
    );
  }
  return (
    <RecipeListDiv>
      <HeadersRowDiv className="row">
        <div className="col-sm-6">
          <Headers>Recipe Name</Headers>
        </div>
        <div className="col-sm-6">
          <Headers>Date Created</Headers>
        </div>
      </HeadersRowDiv>
      {
        props.recipes.map(recipe => (
          <RecipeListItem recipe={recipe} />
        ))
      }
    </RecipeListDiv>
  );
}

const RecipeListDiv = styled.div`
  padding: 10px 20px;
`;

const HeadersRowDiv = styled.div`
  border-radius: 10px;
  background-color: rgba(3, 12, 84, 0.8);
  color: white;
`;

const Headers = styled(P1)`
  border-radius: 10px;
  border: 3px solid white;
  padding: 5px;
`;

export default RecipeList;