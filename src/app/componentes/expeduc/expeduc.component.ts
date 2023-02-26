import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/services/porfolio.service';

@Component({
  selector: 'app-expeduc',
  templateUrl: './expeduc.component.html',
  styleUrls: ['./expeduc.component.scss']
})
export class ExpeducComponent implements OnInit {
  educacionList:any;
  experienceList:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.educacionList=data.education;
      this.experienceList=data.experience;
    })
  }

}
