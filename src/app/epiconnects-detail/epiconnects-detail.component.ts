import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Epiconnect } from '../epiconnects.model';

@Component({
  selector: 'app-epiconnects-detail',
  templateUrl: './epiconnects-detail.component.html',
  styleUrls: ['./epiconnects-detail.component.css']
})
export class EpiconnectsDetailComponent implements OnInit {
  epiconnectsId: number = null;
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.epiconnectsId = parseInt(urlParameters['id']);
   });
  }

}
