import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomersComponent } from './add-customers/add-customers.component';
import { CustomersComponent } from './customers.component';
import { DeleteCustomersComponent } from './delete-customers/delete-customers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [
  { path: '', component: ListCustomersComponent },
  { path:"edit/:id", component: EditCustomersComponent },
  { path:"add", component: AddCustomersComponent },
  { path:"search", component: SearchCustomersComponent },
  { path:"view/:id", component:ViewCustomerComponent },
  { path: "delete/:id", component: DeleteCustomersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
