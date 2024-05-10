import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent {

  
  flag:boolean=false
  dialog!:MatDialogRef<ChildComponent>
  parentMessage:any = ""
  fromChild!:string
  constructor(private mat:MatDialog){}

  openDialog(){
   
    this.dialog=this.mat.open(ChildComponent ,{width:"300px", height:"300px",data:{name:"raj"}})
    
    console.log(this.parentMessage)
    
   this.dialog.afterClosed().subscribe((res:string)=>{
    console.log(res)
    this.fromChild=res
   })
  }
  
  
}
