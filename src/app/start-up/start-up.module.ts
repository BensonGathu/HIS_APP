import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartUpPageRoutingModule } from './start-up-routing.module';

import { StartUpPage } from './start-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartUpPageRoutingModule
  ],
  declarations: [StartUpPage]
})
export class StartUpPageModule {}
