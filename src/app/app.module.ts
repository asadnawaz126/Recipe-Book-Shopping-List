import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeComponent } from './Components/recipe/recipe.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { RecipeListComponent } from './Components/recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Components/recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Components/recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './Components/shopping-list/shopping-edit/shopping-edit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    ShoppingListComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
