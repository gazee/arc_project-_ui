import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanTypeRoutingModule } from './loan-type-routing.module';
import { LoanTypeComponent } from './loan-type.component';


@NgModule({
  declarations: [
    LoanTypeComponent
  ],
  imports: [
    CommonModule,
    LoanTypeRoutingModule
  ]
})
export class LoanTypeModule { }
