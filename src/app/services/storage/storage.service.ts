import { Injectable } from '@angular/core';

const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clean(){
    localStorage.clear();
  }

  saveUser(user:any){
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  }
}
