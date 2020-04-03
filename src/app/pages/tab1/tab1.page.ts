import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../../services/avisos.service';
import { Aviso } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  errorCarga = false;

  constructor( private avisosService: AvisosService) {}

  avisos: Aviso[] = [];

  ngOnInit() {
    this.cargarAvisos();
  }

  loadData( event ) {
    this.cargarAvisos(  );
  }

  cargarAvisos( ) {
    this.avisosService.getAvisos()
    .subscribe( resp => {

      this.avisos.push ( ...resp );
      this.errorCarga = false;
    }, ( error ) => {
      console.log('Error:',  error );
      this.errorCarga = true;
    });
  }


}
