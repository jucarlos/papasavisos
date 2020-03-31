import { Component, OnInit, Input } from '@angular/core';
import { Aviso } from '../../interfaces/interfaces';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss'],
})
export class AvisosComponent implements OnInit {

  @Input() avisos: Aviso[] = [];

  constructor() { }

  ngOnInit() {}

}
