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
