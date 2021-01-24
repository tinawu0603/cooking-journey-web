import { Recipe, Ingredient } from "../types";
import { API_URL } from "../constants";

export const removeRecipe = async (recipeId: string) => {
  const resp = await fetch(`${API_URL}/recipes/${recipeId}/`, {
    method: 'DELETE'
  })
}

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const recipes = await fetch(`${API_URL}/recipes/`, {})
  return recipes.json();
}

export const getRecipe = async (recipeId: string): Promise<Recipe> => {
  const recipes = await fetch(`${API_URL}/recipes/${recipeId}/`, {});
  return recipes.json();
}

export const makeRecipe = async (name: string, ingredients: Ingredient[]): Promise<Recipe> => {
  const recipe = await fetch(`${API_URL}/recipes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name, ingredients
    })
  })
  return await recipe.json();
}

export const updateRecipe = async (recipeId: string, name: string, ingredients: Ingredient[]): Promise<Recipe> => {
  const recipe = await fetch(`${API_URL}/recipes/${recipeId}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name, ingredients
    })
  })
  return await recipe.json();
}