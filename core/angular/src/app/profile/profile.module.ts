import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileComponent, UserDetailsComponent, PurchaseHistoryComponent, SuggestionsComponent]
})
export class ProfileModule { }
