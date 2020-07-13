import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.scss']
})
export class GraficoDonaComponent implements OnInit {

  @Input('labels') doughnutChartLabels : string[];
  @Input('data') doughnutChartData: number[];
  @Input('titulo') titulo:string;

/*      // Doughnut
     public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
     public doughnutChartData: MultiDataSet = [
       [350, 450, 100],
       [50, 150, 120],
       [250, 130, 70],
     ]; */
     public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

   
   // events
   public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
