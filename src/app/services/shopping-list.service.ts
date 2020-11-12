import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientAddedEmitter =  new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', '5'),
    new Ingredient('Tomatoes', '10')
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAddedEmitter.emit(this.ingredients.slice());
  }


  getIngredients(){
    return this.ingredients.slice();
  }

  constructor() { }
}
