import { Component, OnInit } from '@angular/core';
import { Global } from './interfaces/global';
import { CovidService } from './services/covid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  countries: any[];
  global :Global;
  spain: any[];
  mostrarTodos=true;

  constructor (private covid: CovidService) { }

  ngOnInit(): void {
    //llamada al método del servicio que saca los datos de los paises
    this.covid.countriesData()
      .subscribe(
       response =>{
         this.countries = response.Countries;
       },
       error =>{
         console.log(error);
       }
      );
      //llamada al método del servicio que saca los datos globales
      this.covid.generalData()
      .subscribe(
       response =>{
         this.global = response.Global;
       },
       error =>{
         console.log(error);
       }
      );
      //llamada al método del servicio que saca los datos de España solo
      this.covid.spainDataOnly()
      .subscribe(
       response =>{
          this.spain = response;
       },
       error =>{
        console.log(error);
       }
      );
  }
}
