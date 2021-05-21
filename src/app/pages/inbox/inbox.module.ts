import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InboxPageRoutingModule } from './inbox-routing.module';

import { InboxPage } from './inbox.page';
import { ActionSheetComponent } from '../../component/action-sheet/action-sheet.component';
import { ComponentModule } from './../../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InboxPageRoutingModule,
    ComponentModule
  ],
  declarations: [InboxPage, ActionSheetComponent],
})
export class InboxPageModule {}
