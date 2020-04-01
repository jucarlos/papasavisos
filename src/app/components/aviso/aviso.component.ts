import { Component, OnInit, Input } from '@angular/core';
import { Aviso } from '../../interfaces/interfaces';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.scss'],
})
export class AvisoComponent implements OnInit {

  @Input() aviso: Aviso;
  @Input() idAviso: number;
  @Input() enFavoritos;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private dataLocalService: DataLocalService,
    private platform: Platform
     ) { }

  ngOnInit() {}

  async lanzarMenu() {


    let guardarBorrarBtn;

    if ( this.enFavoritos ) {

      guardarBorrarBtn = {
        text: 'Borrar Favorito',
        icon: 'trash',
        cssClass: 'action-primary',
        handler: () => {
          console.log('Borrar de favorito');
          this.dataLocalService.borrarAviso( this.aviso );
        }
      };

    } else {

      guardarBorrarBtn = {
        text: 'Favorito',
        icon: 'heart',
        cssClass: 'action-primary',
        handler: () => {
          console.log('Favorito');
          this.dataLocalService.guardarAviso( this.aviso );
        }
      };

    }



    const actionSheet = await this.actionSheetCtrl.create({

      buttons: [ {
        text: 'Compartir',
        icon: 'share-social',
        cssClass: 'action-primary',
        handler: () => {

          this.compartirNoticia();


        }
      }, guardarBorrarBtn,
      {
        text: 'Cancel',
        icon: 'close',
        cssClass: 'action-primary',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }

  compartirNoticia() {


    if ( this.platform.is('cordova')) {

      this.socialSharing.share(
        this.aviso.titulo,
        'Consejería de Educación',
        this.aviso.texto
        );
    } else {

      if ( navigator['share'] ) {
        navigator['share']({
          title:  this.aviso.titulo,
          text: this.aviso.texto,
          url: 'https://educa.jccm.es/es',
        })
          .then(() => console.log('Correcto'))
          .catch((error) => console.log('Error sharing', error));
      } else {
        console.log('No soporta share.');
      }

    }
  }



}
