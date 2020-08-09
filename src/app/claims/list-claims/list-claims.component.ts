import {Component, OnInit, ViewChild} from '@angular/core';
import {ClaimService} from '../claim.service';
import {Claim} from '../../shared/model/Claim';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-list-claims',
  templateUrl: './list-claims.component.html',
  styleUrls: ['./list-claims.component.css']
})
export class ListClaimsComponent implements OnInit {

  private claims: Array<Claim> = [];
  isLoading = true;

  displayedColumns: string[] = ['submitDate', 'submittedBy', 'broker',
    'invoicePayableDate', 'amount', 'status'];
  dataSource = new MatTableDataSource<Claim>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private claimService: ClaimService) {
  }


  ngOnInit() {
    this.claimService.getClaims()
      .subscribe(data => {
          this.claims.push(...data);
          this.dataSource.data = this.claims;
          this.isLoading = false;
        },
        err => console.log(err),
        () => console.log('Claims loaded successfully'));

  }

  getTestDate() {
    return moment().local(true).toDate();
  }
}
