import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserdataService} from './../api.service'
import {MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.css']
})
export class DailogComponent implements OnInit {

  productForm !: FormGroup;

  constructor(private formBuilder : FormBuilder,private userdataService:UserdataService, private dialodref: MatDialogRef<DailogComponent>) { }

  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      title :['',Validators.required],
      body :['',Validators.required]
    })
  }
  addData(){
    if(this.productForm.valid){
      this.userdataService.postUserData(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Data Added")
          this.productForm.reset();
          this.dialodref.close('save');
        },
        error:()=>{
          alert("Error")
        }
      })
    }
  }
}
