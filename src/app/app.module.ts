import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeBookComponent } from './Components/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { RecipeListComponent } from './Components/recipe-book/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Components/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Components/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './Components/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeBookComponent,
    ShoppingListComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
