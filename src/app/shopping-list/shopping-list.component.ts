import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Ingredient } from '../shared/ingredient.model';
import * as fromApp from '../store/app.reducers';
import * as ShoppingListActions from './store/shopping-list.actions';

// import { Subscription } from 'rxjs/Subscription';
// import { ShoppingListService } from './shopping-list.service';
// import * as fromShoppingList from './store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  shoppingListState: Observable<{ingredients: Ingredient[]}>;

  // private subscription: Subscription;

  constructor(
    // private slService: ShoppingListService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => this.ingredients = ingredients);
    // select the store in AppState
    this.shoppingListState = this.store.select('shoppingList');
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    // this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
