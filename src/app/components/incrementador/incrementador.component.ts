import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('titulo') titulo: string;
  @Input('valorProgress')  progress:number = 50;
  @Output('progress') emitirProgress : EventEmitter<Number> = new EventEmitter();
  @ViewChild("incrementadorHijo") child: ElementRef;
  @Input() btnClass:'btn btn-outline-primary';

 

  constructor() { }

  ngOnInit(): void {
    console.log(this.titulo);
  }


  cambiar( valor : number){
    console.log(valor);
    if(this.progress >=100 && valor > 0){
        this.progress = 100;
    }
    else if(this.progress <=0 && valor <0){
      this.progress = 0;
    } else {
      this.progress += valor;
    }
    this.child.nativeElement.value = this.progress;
    this.emitirProgress.emit(this.progress);
  }

  change(valor : number){
    console.log(valor);
    if(valor >= 100){
      this.progress = 100;
    } else if (valor <= 0){
      this.progress = 1;
    } else {
      this.progress = valor;
    }
    this.child.nativeElement.value = this.progress;
    this.emitirProgress.emit(this.progress);
  }
}
