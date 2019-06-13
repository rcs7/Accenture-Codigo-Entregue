import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomenormalPage } from './homenormal';
import { HttpsPipe } from '../../pipes/https/https';

@NgModule({
  declarations: [
    HomenormalPage,
    HttpsPipe,
  ],
  imports: [
    IonicPageModule.forChild(HomenormalPage),
  ],
})
export class HomenormalPageModule {}
