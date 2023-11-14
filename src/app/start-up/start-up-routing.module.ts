import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartUpPage } from './start-up.page';

const routes: Routes = [
  {
    path: '',
    component: StartUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartUpPageRoutingModule {}
