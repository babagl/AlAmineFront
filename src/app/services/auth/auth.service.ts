import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../../../environment/environnement';
import { Responses } from '../../model/Response.model';
import { Utilisateurs } from '../../model/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private  readonly jwt_token = 'jwt-token';
  private isAuthenticatedSubject = new BehaviorSubject<Boolean>(false);
  private loggedUser!: Utilisateurs
  authenticate(value: {username:string, motDePasse:string}) {
    return this.http.post<Responses>(`${environment.api_url}/user/login`,value).pipe(tap(res=> this.doLoginUser(res)))
  }
  doLoginUser(res: Responses): void {
    this.loggedUser = res.data as Utilisateurs;
    this.storeJwtToken(res.token)
    this.isAuthenticatedSubject.next(true);
  }
  storeJwtToken(token: string | undefined) {
    if(token){
      localStorage.setItem(this.jwt_token, token);
    }
  }

  constructor(private http: HttpClient) { }


  logout(){
    localStorage.removeItem(this.jwt_token);
    this.isAuthenticatedSubject.next(false);
  }
}
