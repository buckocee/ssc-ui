import {NgModule} from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule, MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatSlideToggleModule, MatSortModule, MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTreeModule,
  MatDialogModule,
  MatExpansionModule, MatDividerModule
} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatTableModule,
    MatBadgeModule,
    MatTreeModule,
    MatProgressBarModule,
    MatChipsModule,
    MatSortModule,
    MatStepperModule,
    MatDialogModule,
    MatExpansionModule,
    MatDividerModule
  ]
})
export class MaterialModule {
}
