import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private readonly router: Router, private authService: AuthService) {

  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  isAuthenticated() {
    return this.authService.isLoggedIn();
  }

  ngOnInit(): void {
  }

  public getActiveButton(urlPath: string) {
    return this.router.url.indexOf(urlPath) > -1;
  }
}
