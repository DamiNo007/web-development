import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MobileComponent } from './mobile/mobile.component';

import { BagsAndShoesComponent } from './bags-and-shoes/bags-and-shoes.component';
import { ClothComponent } from './cloth/cloth.component';
import { ClothingComponent } from './clothing/clothing.component';
import { TechComponent } from './tech/tech.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';




@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    LaptopsComponent,
    MobileComponent,
    ClothComponent,
    ClothingComponent,
    TechComponent,
    FootBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'mobile/:productId', component: ProductDetailsComponent },
      { path: 'laptops/:productId', component: LaptopDetailsComponent},
      { path: 'cart', component: CartComponent },
      { path: 'laptops', component: LaptopsComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'clothing', component: ClothingComponent },
      { path: 'bags&shoes', component: BagsAndShoesComponent },
      { path: 'tech', component: TechComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
