import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe('Another Test Recipe',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ]),
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
  ];

  getRecipes() {
    // return a copy of the array
    return this.recipes.slice();
  }

  constructor() { }

}
