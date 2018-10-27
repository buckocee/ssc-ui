import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'MaterialTest';
  private activeButton: boolean;

  constructor(private readonly router: Router) {

  }

  public openAdminDialog(): void {
    this.activeButton = false;
  }

  ngOnInit(): void {
  }

  public getActiveButton(urlPath: string) {
    return this.router.url.indexOf(urlPath) > -1;
  }

  public routeToModule(route: string) {
    this.router.navigateByUrl(route);
  }
}
