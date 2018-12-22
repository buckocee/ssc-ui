import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, UrlSegment} from '@angular/router';
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
  isEditable: boolean;

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
  }

  getClaim(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.claimService.getClaim(id)
      .subscribe(claim => {
        this.claim = claim;
        this.setFormstate();
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(claim: Claim) {
    console.log(claim);
  }

  setFormstate() {
    if (this.route.snapshot.toString().indexOf('edit') > 0 && this.claim && this.claim.status === 'CREATED') {
      this.claimForm.enable();
      this.claimForm.get('claimId').disable();
      this.claimForm.get('status').disable();
      this.claimForm.get('submitDate').disable();
      this.claimForm.get('updateDate').disable();
      this.claimForm.get('carrier').disable();
      this.isEditable = true;
    } else {
      this.claimForm.disable();
      this.isEditable = false;
    }
  }
}
