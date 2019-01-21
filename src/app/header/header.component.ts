import 'rxjs/Rx';

import { Component } from '@angular/core';

import { RecipeService } from './../recipes/recipe.service';
import { DataStorageService } from './../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => { console.log(response); },
        (error) => { console.log(error); }
      );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

}
