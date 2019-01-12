import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.scss']
})
export class DiretivaNgstyleComponent implements OnInit {
  ativo: boolean = false;
  tamanhoFonte: number = 22;

  constructor() { }

  ngOnInit() {
  }

  toggleAtivo(): void {
    this.ativo = !this.ativo;
  }

}
