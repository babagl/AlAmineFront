import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environment/environnement';
import { Utilisateurs } from '../../model/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<Boolean>(false);
  private loggedUser!: Utilisateurs
  authenticate(value: {username:string, motDePasse:string}) {
    return this.http.post(`${environment.api_url}/user/login`,value)
  }

  constructor(private http: HttpClient) { }
}
