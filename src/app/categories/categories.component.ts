import { Component } from '@angular/core';
import { Category } from '../categories.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private router: Router) { }

  categories: Category[] = [
    new Category("Pets"),
    new Category("EpiConnects")
  ]
  goToDetailPage(clickedCategory: Category) {
    this.router.navigate(['Categories', clickedCategory.title]);
  };
};
