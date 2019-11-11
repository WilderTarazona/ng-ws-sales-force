import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  //menuFooterList: MenuFooter[];
  isData = false;

  //constructor(private service: FooterService) {}
  constructor() {}

  ngOnInit() {
    // if (!!this.service.getMenuFooter()) {
    //   this.menuFooterList = this.service.getMenuFooter();
    //   this.isData = true;
    // }
  }
}
