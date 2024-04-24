import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TripListingComponent} from '../trip-listing/trip-listing.component'


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit{
  constructor(
  private router: Router,
  private authenticationService: AuthenticationService
  ){}

  ngOnInit() {}


  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  };

  public onLogout(): void {
    return this.authenticationService.logout();
  };
}
