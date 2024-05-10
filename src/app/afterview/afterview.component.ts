import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-afterview',
  templateUrl: './afterview.component.html',
  styleUrls: ['./afterview.component.scss']
})
export class AfterviewComponent implements OnInit,AfterViewInit {
  @ViewChild("ref") ref!:ElementRef
  name!:string
flag:boolean=false
  ngOnInit(): void {
    // const btn=document.getElementById("btn") as HTMLButtonElement
    console.log(this.ref)
    console.log("inint")
  }
  ngAfterViewInit(): void {
    console.log("in am view")
  }
  change(){
    this.flag=false
  }

}
