import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanTypeComponent } from './loan-type.component';

const routes: Routes = [{ path: '', component: LoanTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanTypeRoutingModule { }
