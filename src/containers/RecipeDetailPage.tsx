import React, { useState, useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import styled from 'styled-components';

import { getRecipe } from '../services/RecipeService';
import { Recipe, ParamTypes } from '../types';
import { H2, P1 } from '../styles/font-styles';
import Nav from '../components/Nav';
import { PageDiv, media } from '../styles/shared-styles';
import IngredientItem from '../components/IngredientItem';

const RecipeDetailPage = () => {
  const params = useParams<ParamTypes>();
  const {
    recipeId
  } = params;

  const [thisRecipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    (async () => {
      setRecipe(await getRecipe(recipeId));
    })();
  }, []);
  if (!thisRecipe) {
    return null;
  }
  return (
    <PageDiv>
      <Nav />
      <RecipeListDiv>
        <RecipeNameDiv className="row">
          <div className="col-sm-12">
            <H2>{thisRecipe!.Name}</H2>
          </div>
        </RecipeNameDiv>
        <IngredientsDiv className="container">
          <div className="row">
            <div className="col-6">
              <P1>Ingredients</P1>
            </div>
            <div className="col-6">
              <P1>Quantity</P1>
            </div>
          </div>
          <IngredientsDivider />
        {
          thisRecipe.Ingredients &&
          thisRecipe.Ingredients.map((ingredient, idx) => (
          <IngredientItem ingredient={ingredient} />))
        }
        </IngredientsDiv>
    </RecipeListDiv>
    </PageDiv>
  );
}

const RecipeListDiv = styled.div`
  padding: 10px 20px;
`;

const RecipeNameDiv = styled.div`
  color: rgba(3, 12, 84, 0.8);
`;

const IngredientsDiv = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  border: 3px solid rgba(3, 12, 84, 0.8);
  ${media.tablet} {
    width: 100%;
  }
`;

const IngredientsDivider = styled.hr`
  margin-top: 0px;
  width: 100%;
  color: rgba(3, 12, 84, 0.8);
`;

export default RecipeDetailPage;