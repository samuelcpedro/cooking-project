import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducer';

// Because the app state is made of multiple pieces like the state
// for a shopping list (export interface State)
export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}
