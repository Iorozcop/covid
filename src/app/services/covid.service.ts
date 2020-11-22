import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {​​ map }​​ from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

    //devuelve los resultados por paises
    countriesData():Observable<any>{
      const endPoint = 'https://api.covid19api.com/summary';
      return this.http.get(endPoint);
    }

    //devuelve los datos generales mundiales
    generalData():Observable<any>{
      const endPoint = 'https://api.covid19api.com/summary';
      return this.http.get( endPoint );
    }

   // devuelve los datos de España
    spainDataOnly():Observable<any>{
      const endPoint = 'https://api.covid19api.com/summary';
       return this.http.get(endPoint).pipe(map (element=>{ 
        return element["Countries"].filter(country => {
          return country.Country === 'Spain';
        });
      }));
    }
}
