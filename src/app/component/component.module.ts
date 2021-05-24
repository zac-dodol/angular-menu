import { NgModule } from '@angular/core';

import { AlertComponent } from './alert/alert.component';
import { ActionSheetComponent } from '../component/action-sheet/action-sheet.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FabLeftComponent } from '../component/fab-left/fab-left.component';

@NgModule({
  declarations: [AlertComponent, FooterComponent, ActionSheetComponent, HeaderComponent, FabLeftComponent],
  exports: [AlertComponent, FooterComponent, ActionSheetComponent, HeaderComponent, FabLeftComponent]
})

export class ComponentModule{}
