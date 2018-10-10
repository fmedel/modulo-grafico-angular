import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {
  public chart: any = null;
  constructor() { }

  ngOnInit() {
      let datos= [{label: '# of Votes',data: [12, 19, 3, 5, 2, 3],backgroundColor:"red",fill:false}]
      this.grafico('realtime','line',['a','b','c','d'],datos);
  }
  grafico(id_canva:string,type_graf:string,label_x:Array<string>,datasets:Array<any> ){
    this.chart = new Chart(id_canva, {
        type: type_graf,
        data: {
            labels:label_x,
            datasets: datasets
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
  } 
  
}
