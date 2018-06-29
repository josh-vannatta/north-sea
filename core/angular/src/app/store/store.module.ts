import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductComponent } from './product-list/product/product.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './navigation/search/search.component';
import { FiltersComponent } from './filters/filters.component';
import { SortByComponent } from './navigation/sort-by/sort-by.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StoreComponent, ProductListComponent, ProductDetailComponent, ProductComponent, NavigationComponent, SearchComponent, FiltersComponent, SortByComponent]
})
export class StoreModule { }
