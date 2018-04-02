import { Component } from '@angular/core';
import { Pet } from '../pets.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {

  constructor(private router: Router) { }

  pets: Pet[] = [
    new Pet("Dog", "Lonely can't find my tail", 1),
    new Pet("Goldfish", "Single can't swim", 2),
    new Pet("Cat", "Lost looking for new owner", 3),
    new Pet("Moth", "Looking for the light", 4)
  ]
  goToDetailPage(clickedPet: Pet) {
    this.router.navigate(['Pets', clickedPet.title]);
  };

}
