import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  recipesDisabled: boolean; // = false;
  shoppingListDisabled: boolean; // = true;

  recipeSelected(event) {
    this.recipesDisabled = !event;
    this.shoppingListDisabled = event;
    console.log(this.recipesDisabled);
    console.log(this.shoppingListDisabled);
  }

  shoppingListSelected(event) {
    this.recipesDisabled = event;
    this.shoppingListDisabled = !event;
    console.log(this.recipesDisabled);
    console.log(this.shoppingListDisabled);
  }
}
