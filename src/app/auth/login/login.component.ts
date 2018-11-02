import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {User} from '../../shared/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  loginUser() {
    this.authService.logout();
    this.authService.login('buckocee@gmail.com', 'Pa$sw0rd');
  }

}
