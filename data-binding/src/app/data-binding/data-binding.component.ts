import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
  styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]
})
export class DataBindingComponent implements OnInit {
  url: string = "http://loiane.com";
  cursoAngular: boolean = true;
  urlImagem: string = "http://lorempixel.com/400/200/nature/";
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;
  nome: string = "abc";
  pessoa: { nome: string; idade: number; endereco: { cidade: string; } } = { nome: 'def', idade: 20, endereco: { cidade: "Araraquara/SP" } };

  constructor() { }

  ngOnInit() {
  }

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado.');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
