import {Component, OnInit} from '@angular/core';
import {ClaimService} from '../claim.service';
import {Claim} from '../../shared/model/Claim';

@Component({
  selector: 'app-list-claims',
  templateUrl: './list-claims.component.html',
  styleUrls: ['./list-claims.component.css']
})
export class ListClaimsComponent implements OnInit {

  private claims: Array<Claim>;

  constructor(private claimService: ClaimService) {
  }


  ngOnInit() {
    this.claims = this.claimService.getClaims();

  }

  public getClaims(): Array<Claim> {
    return this.claims;
  }
}
