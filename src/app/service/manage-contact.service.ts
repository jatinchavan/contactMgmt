import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ManageContactService {

  constructor() {}

  contactsArray: Contact[] = [{
    id: 1,
    firstname: 'Evolent',
    lastname: 'Health',
    email: 'evolent@health.com',
    phone: 9090909090,
    status: 'Active'
  },{
    id: 2,
    firstname: 'Jatin',
    lastname: 'Chavan',
    email: 'jatinchavan3010@gmail.com',
    phone: 9272111491,
    status: 'Inactive'
  },{
    id: 3,
    firstname: 'Cristiano',
    lastname: 'Ronaldo',
    email: 'cristiano.ronaldo@gmail.com',
    phone: 9898989898,
    status: 'Active'
  } ]

  getall(){
    return this.contactsArray;
  }

  create(contact: Contact){
    contact.id= this.getnextId();
    this.contactsArray.push(contact)
  }

  deleteContact(contact:Contact){
    console.log(contact);
    console.log('------------');
    console.log(this.contactsArray.indexOf(contact));
    
    this.contactsArray.splice(this.contactsArray.indexOf(contact),1)
  }

  changeStatus(id){
    this.contactsArray.find((item,index)=>{
      if(item.id===id){
        if(this.contactsArray[index].status==='Active'){
          this.contactsArray[index].status='Inactive'
        }else{
          this.contactsArray[index].status='Active'
        }
      }
    })
  }

  getDataForID(uid:number){
    const itemIndex = this.contactsArray.findIndex(item => item.id === uid)
    return this.contactsArray[itemIndex];
  }

  updateContact(contact:Contact){
    const itemIndex = this.contactsArray.findIndex(item => item.id === contact.id)
    this.contactsArray[itemIndex] = contact;
  }

  getnextId(){
    let temp=0;
    this.contactsArray.forEach(function(item){
      if(temp < item.id)
        temp=item.id;
    });
    return temp + 1;
  }
}
