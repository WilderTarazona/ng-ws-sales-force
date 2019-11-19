import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {CryptoService} from './crypto.service';
import {ICampaign, IOption, IProfile, UserModel} from '@portal/core/models';

@Injectable()
export class SessionService {
  private keyOauth = 'oauth_token';
  private keyUser = 'user_token';
  private keyProfile = 'profile';
  private keyCampaign = 'campaign';
  private keyOptions = 'options';
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
  setProfile(data: string) {
    localStorage.setItem(this.keyProfile, this.crypto.set(JSON.stringify(data)));
  }
  getProfile(): IProfile {
    const decrypted = this.decryptItem(this.keyProfile);
    return JSON.parse(decrypted);
  }
  setCampaign(data: string) {
    localStorage.setItem(this.keyCampaign, this.crypto.set(JSON.stringify(data)));
  }
  getCampaign(): ICampaign {
    const decrypted = this.decryptItem(this.keyCampaign);
    return JSON.parse(decrypted);
  }
  setOptions(data: string) {
    localStorage.setItem(this.keyOptions, this.crypto.set(JSON.stringify(data)));
  }
  getOptions(): IOption[] {
    const decrypted = this.decryptItem(this.keyOptions);
    return JSON.parse(decrypted);
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
  isAuthenticated() {
    return localStorage.getItem(this.keyUser) &&
      localStorage.getItem(this.keyOauth) &&
      localStorage.getItem(this.keyProfile) &&
      localStorage.getItem(this.keyCampaign) &&
      localStorage.getItem(this.keyOptions);
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
