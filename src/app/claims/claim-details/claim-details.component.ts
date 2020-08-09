import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Claim} from '../../shared/model/Claim';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent implements OnInit {

  @Input() claim: Claim;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    console.log(form);
  }

}
