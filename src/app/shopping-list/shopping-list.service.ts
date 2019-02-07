import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

  /** Observable for the ingredients list */
  ingredientsChanged = new Subject<Ingredient[]>();
  /** index of the ingredient that is being edited */
  startedEditing = new Subject<number>();

  /** List of ingredients */
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10),
  ];

  /**
   * Returns a copy of the ingredients list
   */
  getIngredients() {
    return this.ingredients.slice();
  }

  /**
   * Returns a Ingredient selected by the array position
   * @param index Position of the ingredient in the array that was selected
   */
  getIngredient(index: number) {
    return this.ingredients[index];
  }

  /**
   * Adds one Ingredient to the Ingredients array,
   * and returns a copy of the array through the ingredientsChanged subject
   * @param ingredient Ingredient that we want insert
   */
  // addIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  //   this.ingredientsChanged.next(this.ingredients.slice());
  // }

  /**
   * Adds more then one Ingredient to the Ingredients array,
   * and returns a copy of the array through the ingredientsChanged subject
   * @param ingredients Array of Ingredients from a recipes
   */
  // addIngredients(ingredients: Ingredient[]) {
  //   this.ingredients.push(...ingredients);
  //   this.ingredientsChanged.next(this.ingredients.slice());
  // }

  /**
   * Updates one Ingredient to the Ingredients array, of the given index
   * and returns a copy of the array through the ingredientsChanged subject
   * @param index Position of the ingredient in the array that was selected
   * @param newIngredient Ingredient that we want update
   */
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  /**
   * Removes an ingredient from the list
   * @param index Ingredient position in the array
   */
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
