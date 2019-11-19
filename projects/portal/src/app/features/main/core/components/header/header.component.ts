import { Component, OnInit } from '@angular/core';
import {SessionService} from '@portal/core/services';
import {OptionType} from '@portal/core/constants';
import {IOption, ISubOption} from '@portal/core/models';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  optionsHeader: IOption[];
  showMenu = false;
  showPerfil = false;
  // isData = false;
  // sidebar = false;
  /// items: MenuItem[];

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    const options = this.sessionService.getOptions();
    this.optionsHeader = options.filter(x => x.option_type === OptionType.HEADER);
    console.log(this.optionsHeader);

    /*this.items = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
          {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
      }
    ];*/
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  togglePerfil() {
    this.showPerfil = !this.showPerfil;
  }
  haveData(array: ISubOption[]) {
    return array.length > 0;
  }

  /*hidden() {
    this.show = !this.show;
  }
  hide() {
    this.sidebar = !this.sidebar;
  }*/
}
