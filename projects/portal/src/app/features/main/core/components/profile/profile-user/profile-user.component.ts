import { Component, OnInit } from '@angular/core';
import { SessionService } from '@portal/core/services';
import { ProfileModel } from '@portal/core/models';


@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
  profile: ProfileModel;
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    this.profile = new ProfileModel(this.sessionService.getProfile());
  }



}
