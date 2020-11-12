import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../Components/recipe/recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
    'Tasty Schnitzel',
    'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
     [
                new Ingredient('Meat', '1'),
                new Ingredient('French Fries', '20')
                ]
              ),
    new Recipe('Big Fat Burger',
      'Big Fat Burger',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
              new Ingredient('Buns', '2'),
              new Ingredient('Meat', '1')
            ]
          )
  ];

  constructor() { }


  getRecipes(){
    return this.recipes.slice();  // this is done because we want to return a copy of the recipes array instead of an actual
                                  // reference to the array
  }
}
