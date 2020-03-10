import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

const url = 'https://restcountries.eu/rest/v2/name/';

@Injectable()

export class AutoCompleteService {
    constructor(public http: Http) { }

    public maptoJson(res: Response) {
      return res.json();
    }

    public getCountries(key: string): Observable<any> {
       const data = this.http.get(url+key).map(res => {
         return res.json();
      });
      return data;
    }
}