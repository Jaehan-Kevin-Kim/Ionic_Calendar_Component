/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarMode } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements AfterViewInit {
  calendarMode: CalendarMode = 'month';
  currentDate = new Date();

  viewTitle: string;

  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };

  modalReady = false;

  constructor(private _modalCtrl: ModalController) {

  }

  //아래가 위 modalReady를 동작시켜주므로써, device와의 연결 오류를 해결 해 주는 코드 임.
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
  }

  //아래와 같이 save 버튼을 눌러주면 event 정보가 부모 component인 home.page.ts의 openCalModal()의 onDidDismiss()로 연결 되기 때문 (해당 modal을 실행했던 component의 modal method로 돌아감)
  save() {
    this._modalCtrl.dismiss({ event: this.event });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;

  }

  onTimeSelected(e) {
    console.log('e: ', e);
    this.event.startTime = new Date(e.selectedTime);
  }

  close() {
    this._modalCtrl.dismiss();
  }

}

