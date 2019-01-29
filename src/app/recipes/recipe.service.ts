import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

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

  constructor(private slService: ShoppingListService) { }

  /**
   * Get new recipes from the server
   *
   * @param {Recipe[]} recipes
   * @memberof RecipeService
   */
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  /**
   * Return a copy of the array
   *
   * @returns
   * @memberof RecipeService
   */
  getRecipes() {
    return this.recipes.slice();
  }

  /**
   *
   *
   * @param {number} index
   * @returns {Recipe}
   * @memberof RecipeService
   */
  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  /**
   *
   *
   * @param {Ingredient[]} ingredients
   * @memberof RecipeService
   */
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  /**
   *
   *
   * @param {Recipe} recipe
   * @memberof RecipeService
   */
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  /**
   *
   *
   * @param {number} index
   * @param {Recipe} newRecipe
   * @memberof RecipeService
   */
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  /**
   *
   *
   * @param {number} index
   * @memberof RecipeService
   */
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
