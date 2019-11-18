import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '@portal/core/models';
import { SessionService } from '@portal/core/services';
import { UneteService } from './unete.service';
import { environment } from 'projects/portal/src/environments/environment';

@Component({
  selector: 'app-unete',
  templateUrl: './unete.component.html',
  styleUrls: ['./unete.component.scss']
})
export class UneteComponent implements OnInit {
  title: string;
  fontSize1: string;
  lineWeight: string;
  color: string;
  user: ProfileModel;

  constructor(private sessionService: SessionService,  private uneteService: UneteService) { }

  ngOnInit() {
    this.title = 'Únete';
    this.fontSize1 = '30px';
    this.lineWeight = '17px';
    this.color = 'green';

  }

  getDetail() {
    this.user  = this.sessionService.getUser();
    this.uneteService.getToken(this.user).subscribe(token => {
      window.location.href = environment.ENDPOINTS.UNETE_URL_EXTERNAL + token.accessToken;
    });
  }

}
