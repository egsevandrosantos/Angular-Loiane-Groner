import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
  // outputs
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  incrementa(): void {
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.campoValorInput.nativeElement.value })
  }

  decrementa(): void {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.campoValorInput.nativeElement.value })
  }

}
