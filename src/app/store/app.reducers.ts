import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducers';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';

// Because the app state is made of multiple pieces like the state
// for a shopping list (export interface State)
export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReduce
};
