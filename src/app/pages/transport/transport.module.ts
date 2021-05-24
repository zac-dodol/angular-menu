import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransportPageRoutingModule } from './transport-routing.module';
import { ComponentModule } from './../../component/component.module';

import { TransportPage } from './transport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransportPageRoutingModule,
    ComponentModule
  ],
  declarations: [TransportPage]
})
export class TransportPageModule {}
