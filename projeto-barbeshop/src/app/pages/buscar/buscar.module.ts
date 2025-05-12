import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BuscarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BuscarComponent }]),
    FormsModule,
    HttpClientModule,
    SharedModule    
  ],
})
export class BuscarModule {}

