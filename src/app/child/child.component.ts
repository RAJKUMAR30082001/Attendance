import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
//'./child.component.html',
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  childname:string=''
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string},public dialogRef: MatDialogRef< ChildComponent>) {
    console.log(data.name)
   }

 @Output() notify= new EventEmitter<string>()

 changeData(){
  console.log(this.childname+this.data.name)
  // this.notify.emit(this.childname+this.data.name)
  this.dialogRef.close(this.childname+this.data.name)
  
 }
 close(){
  this.dialogRef.close()
 }

}
