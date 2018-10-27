import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Claim} from '../shared/model/Claim';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor(private http: HttpClient) {
    // this.claims = CLAIMS;
    // this.fetchClaims().subscribe(claim => this.claims = claim);
  }

  public getClaims(): Claim[] {
    console.log('fetching claims');
    const claims: Claim[] = [];
    this.http.get<Claim[]>(`/api/v1/claims`)
      .subscribe(data => claims.push(...data),
        err => console.log(err),
        () => console.log('Claims loaded successfully'));
    console.log(claims);
    return claims;
  }

  public getClaim(id: number): Claim {
    let claim: Claim = null;
    this.http.get<Claim>('/api/v1/claims/' + id)
      .subscribe(data => claim = data,
        err => console.log(err),
        () => console.log('Claim ' + id + ' retrieved successfully'));
    return claim;
  }

  public createClaim(claim: Claim): string {
    const body = JSON.stringify(claim);
    let message = null;
    this.http.post('/api/v1/claims', body, httpOptions)
      .subscribe(data => message = data,
        err => console.log(err));
    return message;
  }
}
