import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  nomePortal: string;
  cursos: string[];

  constructor(private cursosService: CursosService) { // Injeção de Dependência
    this.nomePortal = 'http://loiane.training';

    // var servico = new CursosService(); -- Ao inves de usar isso, usaremos Injeção de Dependência

    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
