import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutCartComponent } from './components/checkout-cart/checkout-cart.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule} from '@angular/material/button';
import { MatBadgeModule} from '@angular/material/badge';
import { MatCardModule} from '@angular/material/card';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTableModule} from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    HttpClientModule,
    NgbModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
