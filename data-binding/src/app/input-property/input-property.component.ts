import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss'],
  //inputs: ['nomeCurso']
  //inputs: ['nomeCurso: nome']
})
export class InputPropertyComponent implements OnInit {
  @Input('nome') nomeCurso: string = ''; // Deve ser passado como nome
  //@Input() nomeCurso: string = ''; // Deve ser passado como nomeCurso
  //nomeCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
