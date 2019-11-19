import { Component, OnInit } from '@angular/core';
import { SessionService } from '@portal/core/services';
import { UneteService } from './unete.service';
import { environment } from 'projects/portal/src/environments/environment';
import { ProfileModel } from '@portal/core/models';

@Component({
  selector: 'app-unete',
  templateUrl: './unete.component.html',
  styleUrls: ['./unete.component.scss']
})
export class UneteComponent implements OnInit {

  title: string;
  color: string;
  profile: ProfileModel;
  sale: boolean;
  roadBright: boolean;
  others: boolean;
  data: boolean;
  size: string;
  cars: any[];

  constructor(private sessionService: SessionService,  private uneteService: UneteService) {
    this.data = true;
    this.sale = true;
    this.roadBright = false;
    this.others = false;
    this.cars = ['uno'];
  }

  ngOnInit() {
    this.title = 'Únete';
    this.size = 'xmd';
    this.color = '#000000';
  }

  redirectUnete() {
    this.profile  = this.sessionService.getProfile();
    this.uneteService.getToken(this.profile).subscribe(token => {
      window.location.href = environment.ENDPOINTS.UNETE_URL_EXTERNAL + token.accessToken;
    });
  }

}
