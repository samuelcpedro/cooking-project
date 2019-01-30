import { Action } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ]
};

export function shoppingListreduce(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.]
      };

      break;

    default:
      break;
  }

  return state;
}

