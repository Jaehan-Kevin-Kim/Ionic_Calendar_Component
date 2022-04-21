import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuBarPage } from './menu-bar.page';

const routes: Routes = [
  {
    path: '',
    component: MenuBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuBarPageRoutingModule {}
