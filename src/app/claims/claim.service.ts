import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Claim} from '../shared/model/Claim';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  claims: Claim[];

  constructor(private http: HttpClient) {
    // this.claims = CLAIMS;
    this.getClaims().subscribe(claim => this.claims = claim);
  }

  public getClaims(): Observable<any> {
    console.log('fetching claims');
    return this.http.get<Claim[]>('/api/v1/claims', {responseType: 'json'});
    // return of(CLAIMS);
    // return this.http.get<Claim[]>('data/claims.json', {responseType: 'json'});
  }

  public getClaim(id: number): Observable<any> {
    return this.http.get<Claim>('/api/v1/claims/' + id);
    // return of(CLAIM);
    // return this.http.get<Claim>('data/claim.json', {responseType: 'json'});
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
