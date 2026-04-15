import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginData, RegisteredUser, User} from '../../models/user';

const AUTH_BASE_URL = 'http://localhost:3000/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
   private http = inject(HttpClient);

  private _isConnected = signal(!!this.getAuthToken()); /*Cette ligne crée un signal Angular qui représente l’état de connexion de l’utilisateur*/
  isConnected = this._isConnected.asReadonly();
  /*veut dire que tu exposes ton signal Angular _isConnected en lecture seule.===> il est mutable = modifiable*/

  constructor() {}

  register(user: User) {
    return this.http.post<RegisteredUser>(`${AUTH_BASE_URL}/register`, user);
  }

  login(data: LoginData) {
    return this.http.post<{ token: string }>(`${AUTH_BASE_URL}/login`, data);
  }

  logOut() {
    localStorage.removeItem('token');
    this._isConnected.set(false);
  }

  saveAuthToken(token: string) {
    localStorage.setItem('token', token); /* le localstorage permet de recupere le tocken qui est stocke dans le browser*/
    this._isConnected.set(true);
  }
  getAuthToken() {
    return localStorage.getItem('token');
    /*Elle sert à récupérer un token stocké dans le navigateur.

    LocalStorage est une API du navigateur qui permet de :
      stocker des données côté client
    garder les données même après refresh ou fermeture du navigateur

     */
  }
}
