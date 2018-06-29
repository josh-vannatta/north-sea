import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item-list/item/item.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CartComponent, ItemListComponent, ItemComponent, SuggestionsComponent]
})
export class CartModule { }
