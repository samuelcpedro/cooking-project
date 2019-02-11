import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

// Because the app state is made of multiple pieces like the state
// for a shopping list (export interface State)
export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: null;
  editedIngredientIndex: -1;
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

/**
 *
 *
 * @export
 * @param {*} [state=initialState]
 * @param {ShoppingListActions.ShoppingListActions} action
 * @returns
 */
export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:

      /**
       * 2 - This is the ingredient i want to edit
       */
      const ingredient = state.ingredients[action.payload.index];

      /**
       * 3 - The updated ingredient should be a javascript object
       * where I copy all the properties of the old ingredient to
       * updated in an immutable way (...ingredients).
       * And then I pass all the change properties of the new
       * ingredient which is all the parts of payload.
       * So will distribute all the properties of action.payload.ingredient,
       * this is the new ingredient and will now override all the
       * properties which were part of the old ingredient and it
       * will give me back a new object so that it don't overwrite
       * this in the existing ingredient.
       */
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };

      /**
       * 4 - I need to get my old ingredients
       */
      let ingredients = [...state.ingredients];

      /**
       * 5 - I will set ingredients at a specific position namely
       * action.payload.index = updatedIngredient
       * so now I get an array with all the old elements
       * but one element was overwritten by the updated one.
       */
      ingredients[action.payload.index] = updatedIngredient;

      /**
       * 1 -I want to return an updated state using the old state
       * and copying all its properties in immutable way and then
       * overwriting the one specific ingredient. so overriding the
       * ingredients array as a whole, but I want to override it with
       * an array where one single ingredient is updated.
       */
      return {
        ...state,
        ingredients: ingredients
      };

    case ShoppingListActions.DELETE_INGREDIENT:
      // new array without the element that we want to delete
      // my solution
      // ingredients = (<Array<Ingredient>>state.ingredients).splice(action.payload, 1);
      // Max Solution
      ingredients = [...state.ingredients];
      ingredients.splice(action.payload, 1);
      return {
        ...state,
        ingredients: ingredients
      };
    default:
      return state;
  }
}
