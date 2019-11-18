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
  color: string;
  user: ProfileModel;
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

  getDetail() {
    // this.user  = this.sessionService.getUser();
    // this.uneteService.getToken(this.user).subscribe(token => {
    //   window.location.href = environment.ENDPOINTS.UNETE_URL_EXTERNAL + token.accessToken;
    // });
  }

}
