import { Component , OnInit} from "@angular/core";

@Component({
  templateUrl: "modify-url.component.html"
})

export class ModifyUrlComponent implements OnInit{

  constructor() {
  }

  ngOnInit() {

  }


  modifyUrl() {
    history.replaceState(null, document.title, location.href + "/345");
  }


  recoverUrl() {
    history.replaceState(null, document.title,  "/modify-url");
  }
}
