import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit,OnDestroy {

  

  public subs$: Subscription;


  ngOnDestroy(): void {
   this.subs$.unsubscribe();
  }
  constructor() { }

  ngOnInit(): void {
    this.subs$ = this.getInterval().subscribe(
      next=> console.log(next));
  }

  getInterval(): Observable<number>{
    return interval(50)
    .pipe(
      take(10),//si vario el take puede dar resultados diferente
      map(valor => valor + 1),//(valor) => { return valor + 1;}
      filter(valor => valor%2===0?true:false) //al filtrarlo no sumaria en el take si lo pongo en otro orden por ejemplo (filter,map, take)
    );
  }
  //getObservable() : Observable<any>{
    /* let i=-1;
    return new Observable((subs) => {
      const interval = setInterval(()=>
      { i++;
        subs.next(i);
        if(i ==4){
          clearInterval(interval);
          subs.complete();
        }
     if(i == 2){
          subs.error(i);
        }
      },1000);
    });
    let subs$ = obs$.pipe(
      retry()
    ).subscribe(
      (next)=> console.log("se emitio ", next),
      (error) => console.error("ocurrio un error " , error),
      () => console.log("se completo")
      ); */
      //setTimeout(()=> subs$.unsubscribe(), 5000);
  //}
}
