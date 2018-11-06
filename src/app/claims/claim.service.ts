import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Claim} from '../shared/model/Claim';
import {Observable} from 'rxjs';

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

  public getClaims(): Observable<Claim[]> {
    console.log('fetching claims');
    return this.http.get<Claim[]>(`/api/v1/claims`);
  }

  public getClaim(id: number): Observable<Claim> {
    return this.http.get<Claim>('/api/v1/claims/' + id);
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
