import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  // to toggle menu
  isOpen = true;

  constructor() { }

  ngOnInit() {
  }

  onToggleDropdow() {
    this.isOpen = !this.isOpen;
  }
}
