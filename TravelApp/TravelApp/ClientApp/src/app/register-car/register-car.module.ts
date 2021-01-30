import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterCarPageRoutingModule } from './register-car-routing.module';

import { RegisterCarPage } from './register-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterCarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterCarPage]
})
export class RegisterCarPageModule {}
