import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutCartComponent } from './components/checkout-cart/checkout-cart.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import { MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutCartComponent,
    ShowcaseComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    MatButtonModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
