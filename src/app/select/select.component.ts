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

  bindCityOfSiChuan() {
    this.cityList = this.cityListOfSiChuan;
  }


  bindCityOfGuiZhou() {
    this.cityList = this.cityListOfGuiZhou;

  }

}
