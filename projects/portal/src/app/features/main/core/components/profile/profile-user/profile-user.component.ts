import { Component, OnInit } from '@angular/core';
import { SessionService } from '@portal/core/services';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.userData = this.sessionService.getUser();
    this.userData.names = this.formatTextData(this.userData.names);
    this.userData.role = this.formatTextData(this.userData.role);
    this.userData.level = this.formatTextData(this.userData.level);
  }



}
