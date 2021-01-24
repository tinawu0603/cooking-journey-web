import {
  RecipeState,
  ActionType
} from '../../types';

import {
  GET_RECIPE,
  CREATE_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE,
} from './actions';

const initialState: RecipeState = {
  recipes: []
}

const recipeReducer = (state: RecipeState = initialState, action: ActionType) => {
  switch(action.type) {
    case CREATE_RECIPE:
      return {
        recipes: [
          ...state.recipes,
          action.payload.recipe
        ]
      }
    case DELETE_RECIPE:
      return {
        recipes: state.recipes.filter(recipe => recipe.Id !== action.payload.recipeId)
      }
    case UPDATE_RECIPE:
      return {
        recipes: state.recipes.map(recipe => recipe.Id === action.payload.recipeId ? action.payload.newRecipe : recipe)
      }
    default:
      return state
  }
}

export default recipeReducer;