import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {


  private subs$: Subscription;
  titulo:string;

  constructor(private route: Router) {
    this.subs$ = this.route.events.pipe(
      filter(event => event instanceof ActivationStart),
      filter((event: ActivationStart) => event.snapshot.firstChild === null),
      map((event: ActivationStart) => event.snapshot.data)
    ).subscribe(({titulo}) => this.titulo = titulo );
   }

  ngOnInit(): void {
   
  }


  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }
}
