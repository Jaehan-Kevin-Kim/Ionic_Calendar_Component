import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalModalPageModule } from '../pages/cal-modal/cal-modal.module';
// import '@angular/common/locales/en-CA';
// import localeDe from '@angular/common/locales/de';
// import localeKo from '@angular/common/locales/ko';
import localeCA from '@angular/common/locales/en-CA';
// registerLocaleData(localeDe);
registerLocaleData(localeCA);
// import '@angular/common/locales/global/';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-CA' }
    // { provide: LOCALE_ID, useValue: 'de-De' }
    // { provide: LOCALE_ID, useValue: 'ko-KO' }
  ]

})
export class HomePageModule { }
