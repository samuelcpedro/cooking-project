import { RecipeService } from './../recipes/recipe.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private recipeService: RecipeService) { }

  onSave() {
    this.recipeService.saveRecipes()
      .subscribe(
        (response: Response) => { console.log(response.json()); },
        (error) => { console.log(error); }
      );
  }
}
