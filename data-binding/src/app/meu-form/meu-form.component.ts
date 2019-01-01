import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})
export class MeuFormComponent implements OnInit {
  nome: string = "abc";
  pessoa: { nome: string; idade: number; endereco: { cidade: string; } } = { nome: 'def', idade: 20, endereco: { cidade: "Araraquara/SP" } };

  constructor() { }

  ngOnInit() {
  }

}
