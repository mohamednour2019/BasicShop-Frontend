import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/user-services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  userName: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    let userData = this.authService.getUserData();
    this.userName = `${userData.FirstName} ${userData.LastName}`;
  }
}
