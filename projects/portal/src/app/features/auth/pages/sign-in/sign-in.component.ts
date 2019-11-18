import { Component, OnInit } from '@angular/core';
import {SignInPresenter} from './sign-in.presenter';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [SignInPresenter]
})
export class SignInComponent implements OnInit {
  showPassword = false;

  constructor(
    private presenter: SignInPresenter
  ) {}

  ngOnInit() {
    if (document.location.search.length > 0) {
      this.getExternalLogin();
    }
  }

}
