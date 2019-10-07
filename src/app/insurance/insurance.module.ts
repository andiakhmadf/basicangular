import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { PolicyCreateComponent } from './policy-create/policy-create.component';
import { PolicyUpdateComponent } from './policy-update/policy-update.component';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { CoverageCreateComponent } from './coverage-create/coverage-create.component';



@NgModule({
  declarations: [PolicyListComponent, PolicyCreateComponent, PolicyUpdateComponent, PaymentCreateComponent, CoverageCreateComponent],
  imports: [
    CommonModule
  ]
})
export class InsuranceModule { }
