export interface Recipe {
  Id: string;
  Name: string;
  DateCreated: Date;
  Ingredients: Ingredient[];
}

export interface Ingredient {
  Id: string;
  Name: string;
  Quantity: number;
  Unit: string;
}

export interface ActionType {
  type: string;
  payload: any;
}

export interface ParamTypes {
  recipeId: string
}

export interface RecipeState {
  recipes: Recipe[]
}

import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

// T is State
export type ThunkActionType<T> = ThunkAction<void, T, unknown, Action<string>>;
