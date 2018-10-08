import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private claims: Array<string> = ['One', 'Two', 'Three'];

  constructor() {
  }

  public getClaims(): Array<string> {
    return this.claims;
  }

  public addClaim(claim: string): void {
    this.claims.push(claim);
  }
}
