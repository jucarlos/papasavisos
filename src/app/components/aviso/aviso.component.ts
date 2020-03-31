import { Component, OnInit, Input } from '@angular/core';
import { Aviso } from '../../interfaces/interfaces';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.scss'],
})
export class AvisoComponent implements OnInit {

  @Input() aviso: Aviso;
  @Input() idAviso: number;

  constructor() { }

  ngOnInit() {}

}
