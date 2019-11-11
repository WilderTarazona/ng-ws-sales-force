import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {CryptoService} from './crypto.service';
import {UserModel} from '../models/user.model';

@Injectable()
export class SessionService {
  private keyOauth = 'oauth_token';
  private keyUser = 'user_token';
  private jwtHelper = new JwtHelperService();

  constructor(
    private crypto: CryptoService
  ) { }
  /*get profile() {
    const decryptedToken = this.getOauth();
    return decryptedToken ? decryptedToken : null;
    // return this.oauthToken ? new UserModel(this.jwtHelper.decodeToken(this.oauthToken)) : null;
  }*/

  setOauthToken(token: string) {
    localStorage.setItem(this.keyOauth, this.crypto.set(token));
  }
  getOauthToken() {
    return this.getToken(this.keyOauth);
  }
  setUserToken(token: string) {
    localStorage.setItem(this.keyUser, this.crypto.set(token));
  }
  getUser(): UserModel {
    const decodedToken = this.getDecodeToken(this.keyUser);
    return decodedToken ? new UserModel(decodedToken) : null;
  }

  getDecodeToken(key: string) {
    const decryptedToken = this.getToken(key);
    return decryptedToken ? this.jwtHelper.decodeToken(decryptedToken) : null;
  }
  getToken(key: string) {
    try {
      const encryptedToken = localStorage.getItem(key);
      if (encryptedToken) {
        const decryptedToken = this.crypto.get(encryptedToken);
        this.jwtHelper.decodeToken(decryptedToken); // valida la estructura del token
        return decryptedToken;
      }
    } catch (e) { }
    return null;
  }
  clearStorage() {
    localStorage.clear();
  }

  protected validateJwt(token) {
    try {
      return !!this.jwtHelper.decodeToken(token);
      // return true;
    } catch (e) {
      return false;
    }
  }
}
