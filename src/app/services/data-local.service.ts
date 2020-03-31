import { Injectable } from '@angular/core';
import { Aviso } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';




@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  avisos: Aviso[] = [];

  constructor( private storage: Storage,
               public toastController: ToastController ) {

    this.cargarFavoritos();

  }



  guardarAviso( aviso: Aviso ) {

   const existe = this.avisos.find( avi => avi.idAviso === aviso.idAviso );

   if ( !existe ) {
      this.avisos.unshift( aviso );
      this.storage.set('favoritos', this.avisos );
    }

   this.presentToast( 'Agregado a favoritos' );
  }

  async presentToast( message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  async cargarFavoritos() {

    const favoritos = await this.storage.get('favoritos');

    if ( favoritos ) {
      this.avisos = favoritos;
    }
  }

  borrarAviso( aviso: Aviso ) {

    this.avisos = this.avisos.filter( avi => avi.idAviso !== aviso.idAviso );
    this.storage.set('favoritos', this.avisos );
    this.presentToast( 'Borrado de favoritos' );
  }


}
