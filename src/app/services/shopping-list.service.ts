import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientEmitter =  new EventEmitter<Ingredient[]>();


  private ingredients: Ingredient[] = [
    new Ingredient('Apple', '5'),
    new Ingredient('Tomatoes', '10')
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientEmitter.emit(this.ingredients.slice());
  }


  getIngredients(){
    return this.ingredients.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); // spread operator converts an array of objects into a list of single objects
    this.ingredientEmitter.emit(this.ingredients);

  }

  constructor() { }
}
