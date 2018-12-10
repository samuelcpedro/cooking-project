import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter <boolean>();
  @Output() shoppingListSelected = new EventEmitter <boolean>();

  constructor() { }

  ngOnInit() {
  }

  recipesClickFn() {
    // console.log(true);
    this.recipeSelected.emit(true);
    // this.shoppingListSelected.emit(false);
  }

  shoppingListClickFn() {
    // console.log(true);
    // this.recipeSelected.emit(false);
    this.shoppingListSelected.emit(true);
  }
}
