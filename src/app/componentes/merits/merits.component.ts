import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-merits',
  templateUrl: './merits.component.html',
  styleUrls: ['./merits.component.scss']
})
export class MeritsComponent implements OnInit {
  myMerits:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.myMerits=data.archivements;
    })
  }

}
