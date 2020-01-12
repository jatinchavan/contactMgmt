import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageContactService } from '../service/manage-contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router:Router, private mcs: ManageContactService) { }

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  addForm: FormGroup;

  ngOnInit() {
    this.addForm=this.formBuilder.group({
      id:[],
      email:['',[Validators.required, Validators.pattern(this.emailRegex)]],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      phone:['',Validators.required],
      status:['',Validators.required]
    });
  }

  isInvalid(name){
    const control = this.addForm.get(name);
    return control.invalid && control.dirty;
  }
  onSubmit() {
    this.mcs.create(this.addForm.value);
    this.router.navigate(['/view']);
  }

  onCancel(){
    this.router.navigate(['/view'])
  }

}
