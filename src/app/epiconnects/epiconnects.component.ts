import { Component } from '@angular/core';
import { Epiconnect } from '../epiconnects.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-epiconnects',
  templateUrl: './epiconnects.component.html',
  styleUrls: ['./epiconnects.component.css']
})
export class EpiconnectsComponent {

  constructor(private router: Router) { }
  epiconnects: Epiconnect[] = [
    new Epiconnect("Coder looking for a perfect pair.", "I'm a geeky F ISO M-F partner who doesn't scream while coding.  Must be GitHub friendly. No exceptions!", 1),
    new Epiconnect("Coder looking for a new outlook...in coding.", "Akward M ISO M-F partner who do not mind rants about pickles and meatballs. GitHub lingo is a must. No exceptions!", 2),
    new Epiconnect("Coder looking for a PARTNER, duh!", "Confident M ISO M-F partner who plays well with the keyboard. The more Atom tricks you know, the better ;-) No slackers!!", 3),
  ]
  goToDetailPage(clickedEpiconnect: Epiconnect) {
    this.router.navigate(['EpiConnects', clickedEpiconnect.id]);
  };


}
