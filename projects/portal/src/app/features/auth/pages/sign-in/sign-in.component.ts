import { Component, OnInit } from '@angular/core';
import {SignInPresenter} from './sign-in.presenter';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [SignInPresenter]
})
export class SignInComponent implements OnInit {
  showPassword = false;

  constructor(
    private presenter: SignInPresenter,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const token = this.route.snapshot.paramMap.get('token');
    if (token) {
      this.presenter.signInExternal(token);
    }
  }

}
