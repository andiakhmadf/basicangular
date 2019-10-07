import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientUpdateComponent } from './client-update/client-update.component';



@NgModule({
  declarations: [ClientListComponent, ClientCreateComponent, ClientUpdateComponent],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
