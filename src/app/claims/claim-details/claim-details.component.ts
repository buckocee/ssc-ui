import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-claim-details',
  templateUrl: './claim-details.component.html',
  styleUrls: ['./claim-details.component.css']
})
export class ClaimDetailsComponent implements OnInit {

  @Input() claim: string;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    console.log(form);
  }

}
