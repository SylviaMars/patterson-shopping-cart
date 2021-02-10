import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutCartComponent } from './components/checkout-cart/checkout-cart.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';

const routes: Routes = [
  // Routes
  { path: 'showcase', component: ShowcaseComponent},
  { path: 'cart', component: CheckoutCartComponent},
  { path: '', component: ShowcaseComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
