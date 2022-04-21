import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuBarPageRoutingModule } from './menu-bar-routing.module';

import { MenuBarPage } from './menu-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuBarPageRoutingModule
  ],
  declarations: [MenuBarPage]
})
export class MenuBarPageModule {}
