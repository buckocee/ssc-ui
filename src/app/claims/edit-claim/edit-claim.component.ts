import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ClaimService} from '../claim.service';
import {Claim} from '../../shared/model/Claim';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-claim',
  templateUrl: './edit-claim.component.html',
  styleUrls: ['./edit-claim.component.css']
})
export class EditClaimComponent implements OnInit {

  claim: Claim;
  claimForm: FormGroup;

  constructor(private claimService: ClaimService, private route: ActivatedRoute, private location: Location,
              private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.getClaim();
    this.claimForm = this._fb.group({
      claimId: ['', Validators.required],
      status: [''],
      submitDate: [''],
      updateDate: [''],
      description: [''],
      amount: [''],
      carrier: this._fb.group({
        businessName: ['', [Validators.required]],
        mcNumber: [''],
        dotNumber: [''],
        phoneNumber: ['', [Validators.required]],
        emailAddress: ['', [Validators.email]]
      }),
      broker: this._fb.group({
        businessName: ['', [Validators.required]],
        mcNumber: [],
        dotNumber: [],
        phoneNumber: []
      }),
      invoice: this._fb.group({
        invoiceNumber: [''],
        loadDate: [''],
        loadType: [''],
        amount: [''],
        invoicePayableDate: [''],
        haulageDistance: [''],
      })
    });

    this.claimForm.disable();
  }

  getClaim(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.claimService.getClaim(id)
      .subscribe(claim => this.claim = claim);
  }

  goBack(): void {
    this.location.back();
  }

  save(claim: Claim) {
    console.log(claim);
  }
}
