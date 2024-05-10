import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  constructor(private loc:Location){}

  location(){
    this.loc.back()
  }
}
