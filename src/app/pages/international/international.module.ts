import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternationalPageRoutingModule } from './international-routing.module';
import { ComponentModule } from './../../component/component.module';

import { InternationalPage } from './international.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternationalPageRoutingModule,
    ComponentModule
  ],
  declarations: [InternationalPage]
})
export class InternationalPageModule {}
