import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CategoriesComponent } from './categories/categories.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { PetsComponent } from './pets/pets.component';
import { EpiconnectsComponent } from './epiconnects/epiconnects.component';
import { EpiconnectsDetailComponent } from './epiconnects-detail/epiconnects-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CategoriesComponent,
    ForSaleComponent,
    PetsComponent,
    EpiconnectsComponent,
    EpiconnectsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
