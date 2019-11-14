import { Component, OnInit } from '@angular/core';
import {OptionType} from '@portal/core/constants';
import {IOption} from '@portal/core/models';
import {SessionService} from '@portal/core/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  optionsFooter: IOption[];
  year = new Date().getFullYear();

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    const options = this.sessionService.getOptions();
    this.optionsFooter = options.filter(x => x.option_type === OptionType.FOOTER);
  }

  compareTexts(source: string, target: string) {
    return source.toLocaleLowerCase() === target.toLocaleLowerCase();
  }
}
