import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../api.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DailogComponent } from '../dailog/dailog.component';
import{MatDialogRef} from '@angular/material/dialog'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  userData:any=[]; 
constructor(private userdataService:UserdataService , private dialog : MatDialog){
this.getData();



}
  ngOnInit(): void {

  }

  openDialog() {
  //   const dialogRef=this.dialog.open(DailogComponent, {
  //     width:"30%"
  //   });

  // dialogRef.afterClosed(res=>{

  // })
  const dialogRef = this.dialog.open(DailogComponent, {
    width: '250px',
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.getData();
  });
}
getData(){
  this.userdataService.getUserData().subscribe(data=>{
    this.userData=data;
  })
}
}
