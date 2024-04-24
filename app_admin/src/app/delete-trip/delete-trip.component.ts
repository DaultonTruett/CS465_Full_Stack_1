import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { TripDataService } from '../services/trip-data.service';


@Component({
  selector: 'app-delete-trip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-trip.component.html',
  styleUrl: './delete-trip.component.css'
})

export class DeleteTripComponent {
  tripCode!: string;
  

  constructor(
    private router: Router,
    private tripService: TripDataService,
  ) {}

  ngOnInit(): void {
    let tripCode = localStorage.getItem("tripCode");

    if(!tripCode){
      alert("Something wrong, couldn't find where I stashed the tripCode!");
      this.router.navigate(['']);
      return;
    }

    this.tripService.deleteTrip(tripCode)
    .subscribe({
      next: (data: any) => {
        console.log(data);
        this.router.navigate(['list-trips'])
    },
    error: (error: any) => {
      console.log('Error' + error);
    }
  });

  };

  /*
  public onClickTrips(){
    this.router.navigate(['list-trips'])
  }
  */

};
