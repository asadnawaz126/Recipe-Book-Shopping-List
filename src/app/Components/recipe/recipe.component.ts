import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]   // added at recipe level so that recipe list/item/detail all use the same service
})
export class RecipeComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit(): void {
    // subscribes to the event emitter that is recipeSelected.
    // so when onItemClick() is called in recipe-item component,
    // this will set selected Recipe to be the recipe that is
    // emitted from that event.
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
