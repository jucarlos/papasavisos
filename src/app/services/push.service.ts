import { Injectable } from '@angular/core';

import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { }

  configuracionInicial() {

    this.oneSignal.startInit('63aba7c1-8304-47f9-b476-5fa0051c82bb', '510486820311');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(( noti ) => {
     console.log('Notificación recibida: ', noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      console.log( 'Notificación abierta: ', noti);
    });

    this.oneSignal.endInit();


  }


}
