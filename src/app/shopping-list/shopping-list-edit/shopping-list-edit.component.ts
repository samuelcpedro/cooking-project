import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import * as fromApp from '../../store/app.reducers';
import * as ShoppingListActions from '../store/shopping-list.actions';

// import * as fromShoppingList from '../store/shopping-list.reducers';
// import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  // editedItemIndex: number;
  editedItem: Ingredient;

  constructor(
    // private slService: ShoppingListService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    // we select the 'shoppingList' that is a reference of the store,
    // that we defined app.module in StoreModule.forRoot({shoppingList: shoppingListReducer}),
    this.subscription = this.store.select('shoppingList')
    .subscribe(
      data => {
        if (data.editedIngredientIndex > -1) {
          this.editedItem = data.editedIngredient;
          this.editMode = true;

          // update form
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });

        } else {
          this.editMode = false;
        }
      }
    );
  }

  /**
   * Adds or updates an Ingredient
   * @param form Contains the Form values
   */
  onSubmit(form: NgForm) {

    const value = form.value;

    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // this.slService.updateIngredient(this.editedItemIndex, newIngredient);
      // Call action to update the store with an Ingredient object with an index and the newingredient to update
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient: newIngredient}));
    } else {
      // this.slService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    form.reset();
    this.editMode = false;
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete() {
    // this.slService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.

    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }

}
