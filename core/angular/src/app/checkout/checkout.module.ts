import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CartAppletComponent } from './cart-applet/cart-applet.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ShippingComponent } from './shipping/shipping.component';
import { BillingComponent } from './billing/billing.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CheckoutComponent, CartAppletComponent, CustomerDetailsComponent, ShippingComponent, BillingComponent, PaymentComponent]
})
export class CheckoutModule { }
