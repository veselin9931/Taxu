import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouriteOrdersPageRoutingModule } from './favourite-orders-routing.module';

import { FavouriteOrdersPage } from './favourite-orders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouriteOrdersPageRoutingModule
  ],
  declarations: [FavouriteOrdersPage]
})
export class FavouriteOrdersPageModule {}
