import { Injectable } from '@angular/core';
import {forkJoin, of} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SessionService} from '@portal/core/services';
import {OauthService} from '@portal/core/rest';
import {AuthService} from '../../core/http/auth.service';
import {ProfileService} from '../../core/graphql/profile.service';

@Injectable()
export class SignInPresenter {
  authForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private oAuthService: OauthService,
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      app: ['web'],
      country: ['PE'],
      role: ['SE']
    });
  }

  get usernameField() {
    return this.authForm.get('username');
  }

  get passwordField() {
    return this.authForm.get('password');
  }

  signIn() {
    if (this.authForm.invalid) { return; }
    /*const credentials = {
      username: '045020460',
      password: '123456',
      country: 'PE',
      app: 'web',
      role: 'SE'
    };*/
    this.authService.signIn(this.authForm.value)
      .subscribe(res => {
        if (res.type === 200) {
          this.sessionService.setUserToken(res.detail.accessToken);
          this.accessApiManager();
        }
      });
    /*
    of({token: 'dasdasda', user: {}}) // Login Service
      .subscribe(
        res => {
          localStorage.setItem('user', JSON.stringify(res));
          // this.storage.setUser(user)
          this.loadProfile();
        },
        err => {}
      );
     */
  }

  protected accessApiManager() {
    this.oAuthService.generateOAuthToken()
      .subscribe(res => {
        this.sessionService.setOauthToken(res.access_token);
        this.loadProfile();
      });
  }

  protected loadProfile() {
    console.log('Loading Profile');
    const user = this.sessionService.getUser();
    this.profileService.getProfile(user) // Profile Service
      .subscribe(
        res => {
          console.log(res);
          this.loadCampaignAndMenu();
        },
        // err => {},
      );
  }

  protected loadCampaignAndMenu() {
    console.log('Loading CampaignAndMenu');
    // const user = this.storage.getUser()
    forkJoin(
      of({}), // Campaign Service
      of({}), // Menu Service
    )
      .subscribe(
        res => {
          // Redigir al PortalFFVV
        }, // res[0] = respuesta de campaign, res[1] = respuesta de menu
        err => {}
      );
  }
}
