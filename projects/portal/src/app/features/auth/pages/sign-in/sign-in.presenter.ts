import { Injectable } from '@angular/core';
import {forkJoin, of} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SessionService} from '@portal/core/services';
import {OauthService} from '@portal/core/rest';
import {AuthService} from '../../core/http/auth.service';
import {ProfileService} from '../../core/graphql/profile.service';
import {CampaignService} from '../../core/graphql/campaign.service';
import {OptionService} from '../../core/graphql/option.service';
import {Router} from '@angular/router';

@Injectable()
export class SignInPresenter {
  authForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private oAuthService: OauthService,
    private authService: AuthService,
    private profileService: ProfileService,
    private campaignService: CampaignService,
    private optionService: OptionService,
    private router: Router
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
    // this.loadCampaignAndMenu();
    this.authService.signIn(this.authForm.value)
      .subscribe(res => {
        if (res.type === 200) {
          this.sessionService.setUserToken(res.detail.accessToken);
          this.accessApiManager();
        }
      });
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
          this.sessionService.setProfile(res);
          this.loadCampaign();
        }
      );
  }

  protected loadCampaign() {
    console.log('Loading Campaign');
    const profile = this.sessionService.getProfile();
    this.campaignService.getCampaign(profile)
      .subscribe(res => {
        this.sessionService.setCampaign(res);
        this.loadOptions();
      });
/*
    const observable = forkJoin({
      this.campaignService.getCampaign(profile), // Campaign Service
      this.optionService.getOptions(profile) // Menu Service
    });
    observable.subscribe({
      next: value => console.log(value),
      complete: () => console.log('This is how it ends!'),
    }); ([camp, opts]) => {} */
  }
  protected loadOptions() {
    console.log('Loading Options');
    const profile = this.sessionService.getProfile();
    this.optionService.getOptions(profile)
      .subscribe(res => {
        this.sessionService.setOptions(res);
        this.router.navigateByUrl('/PortalFFVV');
      });
  }
}
