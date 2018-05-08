import { Component, OnInit } from "@angular/core";


@Component({
  templateUrl: "./select.component.html"
}
)
export class SelectComponent implements OnInit {

  cityList: any[];
  cityListOfSiChuan: string[];
  cityListOfGuiZhou: string[];
  selectedCity;

  constructor() {
  }

  ngOnInit() {
    this.cityListOfSiChuan = [
      "Cheng Du",
      "Lu Zhou"
    ];
    this.cityListOfGuiZhou = [
      "Gui Yang",
      "Zun Yi"
    ];
    this.cityList = this.cityListOfGuiZhou;
    this.selectedCity = "";
  }


  updateDataSource() {
    if (this.cityList == this.cityListOfGuiZhou) {
      this.cityList = this.cityListOfSiChuan;
    }

    else if (this.cityList == this.cityListOfSiChuan) {
      this.cityList = this.cityListOfGuiZhou;
    }
  }


}
