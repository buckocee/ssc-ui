import {Component, OnInit} from '@angular/core';
import {ClaimService} from '../../shared/service/claim.service';

@Component({
  selector: 'app-list-claims',
  templateUrl: './list-claims.component.html',
  styleUrls: ['./list-claims.component.css']
})
export class ListClaimsComponent implements OnInit {

  private claims: Array<string>;
  private claimService: ClaimService;

  constructor(claimService: ClaimService) {
    this.claimService = claimService;
    this.claims = claimService.getClaims();
  }


  ngOnInit() {

  }

  public getClaims(): Array<string> {
    return this.claims;
  }
}
