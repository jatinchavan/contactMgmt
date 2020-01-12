import { Component, OnInit } from '@angular/core';
import { ManageContactService } from '../service/manage-contact.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router:Router, private mcs: ManageContactService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm=this.formBuilder.group({
      id:[],
      email:['',Validators.required],
      firstname:['',[Validators.required, Validators.pattern(this.mcs.nameRegex)]],
      lastname:['',[Validators.required, Validators.pattern(this.mcs.nameRegex)]],
      phone:['',[Validators.required, Validators.pattern(this.mcs.phoneRegex)]],
      status:['',Validators.required]
    });
  
    const uid=localStorage.getItem('uid');
    const data= this.mcs.getDataForID(+uid);
    // console.log(data);
    
    this.addForm.setValue(data);
  }

  isInvalid(name){
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }
  onSubmit() {
    this.mcs.updateContact(this.addForm.value);
    this.router.navigate(['/view']);
  }

  onCancel(){
    this.router.navigate(['/view'])
  }

}
