import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {



  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(event) {
    console.log(event);
    this.ingredients.push(event);
    console.log(JSON.stringify(this.ingredients, null, 4));
  }

}
