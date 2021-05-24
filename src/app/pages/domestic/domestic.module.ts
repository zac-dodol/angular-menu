import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DomesticPageRoutingModule } from './domestic-routing.module';
import { ComponentModule } from './../../component/component.module';

import { DomesticPage } from './domestic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DomesticPageRoutingModule,
    ComponentModule
  ],
  declarations: [DomesticPage]
})
export class DomesticPageModule {}
