import { Injectable } from '@angular/core';
import {Recipe} from '../Components/recipe/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [new Recipe('Test Recipe', 'Test Recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Another Test Recipe', 'Another Test Recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')];

  constructor() { }


  getRecipes(){
    return this.recipes.slice();  // this is done because we want to return a copy of the recipes array instead of an actual
                                  // reference to the array
  }
}
