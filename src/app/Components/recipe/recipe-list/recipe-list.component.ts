import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('Test Recipe', 'Test Recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')];

  @Output() selectedRecipeEmitter = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {

    console.log(this.recipes.length);
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipeEmitter.emit(recipe);
  }

}
