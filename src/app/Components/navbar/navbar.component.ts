import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/user-services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  userName: string;
  isAdmin: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    let userData = this.authService.getUserData();
    this.isAdmin = userData.Role == "Admin"
    this.userName = `${userData.FirstName} ${userData.LastName}`;
  }

  logout() {
    this.authService.clearLocalStorage();
    this.router.navigate(['/'])
  }
}
