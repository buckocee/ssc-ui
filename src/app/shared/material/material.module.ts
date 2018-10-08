import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatListModule
  ]
})
export class MaterialModule {
}
