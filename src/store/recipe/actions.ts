import {ActionType, Recipe } from '../../types';

export const GET_RECIPE = 'GET_RECIPE';
export const getRecipe = (recipeId: string, recipe: Recipe): ActionType => ({
  type: GET_RECIPE,
  payload: {
    recipeId: recipeId,
    recipe: recipe
  }
});

export const CREATE_RECIPE = 'CREATE_RECIPE';
export const createRecipe = (recipe: Recipe): ActionType => ({
  type: CREATE_RECIPE,
  payload: {
    recipe: recipe
  }
});

export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const updateRecipe = (recipeId: string, recipe: Recipe): ActionType => ({
  type: UPDATE_RECIPE,
  payload: {
    recipeId: recipeId,
    newRecipe: recipe
  }
});

export const DELETE_RECIPE = 'DELETE_RECIPE';
export const deleteRecipe = (recipeId: string): ActionType => ({
  type: DELETE_RECIPE,
  payload: {
    recipeId: recipeId
  }
});
