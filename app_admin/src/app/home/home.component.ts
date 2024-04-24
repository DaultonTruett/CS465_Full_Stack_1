import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from '../services/authentication.service';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
import { User } from '../models/user';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [TripDataService]
})
export class HomeComponent implements OnInit{
  trips!: Trip[];
  numTrips = '';
  userName = '';
  user! : User;

  constructor(
    private tripDataService: TripDataService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(){
    
    this.tripDataService.getTrips()
    .subscribe({
      next: (value: any) => {
        this.trips = value;

        if(value.length > 0){
          this.numTrips = 'Trips in database: ' + value.length;
        }else{
          this.numTrips = 'There are no trips in the database';
        }

        console.log(this.numTrips);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    });

    this.user = this.authenticationService.getCurrentUser();
    this.userName = this.user.name;
  };

  public isLoggedIn(): boolean{
    return this.authenticationService.isLoggedIn();
  };

};
