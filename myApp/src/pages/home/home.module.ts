import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
//import { HttpsPipe } from '../../pipes/https/https';


@NgModule({
  declarations: [
    HomePage,
  //  HttpsPipe,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}

