import React, { useState, useEffect } from 'react';
import { getAllRecipes } from '../services/RecipeService';
import RecipeList from '../components/RecipeList';
import { Recipe } from '../types';
import Nav from '../components/Nav';
import { PageDiv } from '../styles/shared-styles';

const Home = () => {
  const [recipeList, setRecipeList] = useState<Recipe[]>();

  useEffect(() => {
    (async () => {
      setRecipeList(await getAllRecipes());
    })();
  }, [])

  return (
    <PageDiv>
      <Nav />
      <RecipeList recipes={recipeList!} />
    </PageDiv>
  );
}

export default Home;