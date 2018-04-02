import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CategoriesComponent } from './categories/categories.component';
import { EpiconnectsComponent } from './epiconnects/epiconnects.component';
import { PetsComponent } from './pets/pets.component';

const appRoutes: Routes = [

  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'Categories',
    component: CategoriesComponent
  },
  {
    path: 'EpiConnects',
    component: EpiconnectsComponent
  },
  {
    path: 'Pets',
    component: PetsComponent
  }

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
