import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../../services/avisos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor( private avisosService: AvisosService) {}

  ngOnInit() {
    this.avisosService.getAvisos()
    .subscribe( avisos => {
      console.log( avisos );
    });
  }


}
