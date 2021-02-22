import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, UrlSegment} from '@angular/router';
import {Location} from '@angular/common';
import {ClaimService} from '../claim.service';
import {Claim} from '../../shared/model/Claim';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-edit-claim',
  templateUrl: './edit-claim.component.html',
  styleUrls: ['./edit-claim.component.css']
})
export class EditClaimComponent implements OnInit {

  claim: Claim;
  claimForm: FormGroup;
  isEditable: boolean;
  private claimId: number;

  constructor(private claimService: ClaimService, private route: ActivatedRoute, private location: Location,
              private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.getClaim();
  }

  getClaim(): void {
    this.route.paramMap.subscribe(
      params => {
        this.claimId = +params.get('id');
        this.claimService.getClaim(this.claimId)
          .subscribe(claim => {
            this.claim = claim;
            this.populateForm(this.claim);
            this.setFormState();
          });
      });
  }

  populateForm(claim: Claim): void {
    this.claimForm = this._fb.group({
      claimId: [claim.claimId, Validators.required],
      status: [claim.status],
      submitDate: [new Date(claim.submitDate).toDateString()],
      updateDate: [claim.updateDate],
      description: [claim.description],
      amount: [claim.amount],
      carrier: this._fb.group({
        businessName: [claim.carrier.businessName, [Validators.required]],
        mcNumber: [claim.carrier.mcNumber],
        dotNumber: [claim.carrier.dotNumber],
        phoneNumber: [claim.carrier.phoneNumber, [Validators.required]],
        emailAddress: [claim.carrier.email, [Validators.email]]
      }),
      broker: this._fb.group({
        businessName: [claim.broker.businessName, [Validators.required]],
        mcNumber: [claim.broker.mcNumber],
        dotNumber: [claim.broker.dotNumber],
        phoneNumber: [claim.broker.phoneNumber]
      }),
      invoice: this._fb.group({
        invoiceNumber: [claim.invoiceNumber],
        loadDate: [claim.loadDate],
        loadType: [claim.loadType],
        amount: [claim.amount],
        invoicePayableDate: [claim.invoicePayableDate],
        haulageDistance: [claim.haulageDistance],
      })
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(claim: Claim) {
    console.log(claim);
  }

  setFormState() {
    if (this.route.snapshot.toString().indexOf('edit') > 0 &&
      this.claim && this.claim.status === 'CREATED') {
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

  updateForm() {
    this.claimForm.setValue({
      claimId: this.claim.claimId,
      status: [''],
      submitDate: [''],
      updateDate: [''],
      description: [''],
      amount: [''],
    });
  }
}
