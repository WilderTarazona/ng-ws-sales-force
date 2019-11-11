import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {CryptoService} from './crypto.service';
import {UserModel} from '../models/user.model';
import {IProfile} from '../models/profile.interface';

@Injectable()
export class SessionService {
  private keyOauth = 'oauth_token';
  private keyUser = 'user_token';
  private KeyProfile = 'profile';
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
    return this.decryptItem(this.keyOauth);
  }
  setUserToken(token: string) {
    localStorage.setItem(this.keyUser, this.crypto.set(token));
  }
  getUser(): UserModel {
    const decodedToken = this.getDecodeToken(this.keyUser);
    return decodedToken ? new UserModel(decodedToken) : null;
  }
  getProfile(): IProfile {
    const decrypted = this.decryptItem(this.KeyProfile);
    return JSON.parse(decrypted);
  }
  setProfile(data: string) {
    localStorage.setItem(this.KeyProfile, this.crypto.set(JSON.stringify(data)));
  }

  getDecodeToken(key: string) {
    const decryptedToken = this.decryptItem(key);
    return decryptedToken ? this.jwtHelper.decodeToken(decryptedToken) : null;
  }
  decryptItem(key: string) {
    try {
      const encrypted = localStorage.getItem(key);
      if (encrypted) {
        return this.crypto.get(encrypted);
        // this.jwtHelper.decodeToken(decryptedToken); // valida la estructura del token
        // return decryptedToken;
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
