import {
  Component,
  OnInit
} from '@angular/core';
import {
  Contact
} from '../service/contact.model';
import {
  ManageContactService
} from '../service/manage-contact.service';
import {
  Router
} from '@angular/router';


@Component({
  selector: 'app-app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.css']
})
export class AppViewComponent implements OnInit {
  contactsArray: Contact[];

  constructor(private mcs: ManageContactService, private route: Router) {}

  ngOnInit() {
    this.contactsArray = this.mcs.getall();
    // console.log(this.contactsArray);
  }
  deleteUserContact(usercon: Contact) {
    if(confirm("Are you sure to delete?")){
      this.mcs.deleteContact(usercon);
    }
  }
  toggleStatus(userconId) {
    // console.log(userconId);
    this.mcs.changeStatus(userconId);
  }
  editUserContact(usercon: Contact) {
    localStorage.setItem('uid', usercon.id.toString())
    this.route.navigate(['/edit'])
  }

  onSelectFname(event:any) {
    const val = event.target.value;
    // console.log(val);

    if (val === 'Ascending (A-Z)') {
      this.contactsArray.sort(function (a, b) {
        if (a.firstname.toUpperCase() < b.firstname.toUpperCase()) {
          return -1;
        }
        if (a.firstname.toUpperCase() > b.firstname.toUpperCase()) {
          return 1;
        }
        return 0;
      });
    } else if (val === 'Descending (Z-A)') {
      this.contactsArray.sort(function (a, b) {
        if (a.firstname.toUpperCase() > b.firstname.toUpperCase()) {
          return -1;
        }
        if (a.firstname.toUpperCase() < b.firstname.toUpperCase()) {
          return 1;
        }
        return 0;
      });
    }
  }

  onSelectLname(event:any) {
    const val = event.target.value;
    // console.log(val);

    if (val === 'Ascending (A-Z)') {
      this.contactsArray.sort(function (a, b) {
        if (a.lastname.toUpperCase() < b.lastname.toUpperCase()) {
          return -1;
        }
        if (a.lastname.toUpperCase() > b.lastname.toUpperCase()) {
          return 1;
        }
        return 0;
      });
    } else if (val === 'Descending (Z-A)') {
      this.contactsArray.sort(function (a, b) {
        if (a.lastname.toUpperCase() > b.lastname.toUpperCase()) {
          return -1;
        }
        if (a.lastname.toUpperCase() < b.lastname.toUpperCase()) {
          return 1;
        }
        return 0;
      });
    }
  }

  onSelectID(event:any){
    const val = event.target.value;
    if(val === 'Lowest first'){
      this.contactsArray.sort(function (a, b) {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    }else if(val === 'Highest first'){
      this.contactsArray.sort(function (a, b) {
        if (a.id > b.id) {
          return -1;
        }
        if (a.id < b.id) {
          return 1;
        }
        return 0;
      });
    }
  }
}
