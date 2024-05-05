import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environnement';
import { ISubscription } from '../../response/Api.res';


@Injectable({
  providedIn: 'root'
})
export class BoutiquesService {

  constructor(private http:HttpClient) { }


  getBoutiques(page:number,limit:number){
    return this.http.get<ISubscription>(`${environment.api_url}/boutique?page=${page}&limit=${limit}`);
  }

}
