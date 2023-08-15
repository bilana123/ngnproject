import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
})
export class LoginformComponent implements OnInit {
  name: string = '';
  email: string = '';
  address: string = '';
  salary: string = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    // Uncomment the following line if you intend to use it:
    //this.getEmploye();\\
    this.postEmployee();
  }

  postEmployee() {
    var data = {
      name: this.name,
      email: this.email,
      address: this.address,
      salary: this.salary,
    };

    this.api.postEmployee(data).subscribe(
      (response) => {
        console.log(response);
        alert('Employee added successfully');
      },
      (error) => {
        console.log(error);
        alert('Something went wrong');
      }
    );
  }

  //Uncomment the following method if you intend to use it:
  // getEmploye() {
  //   this.api.employedata().subscribe(
  //     (res: any) => {
  //       this.employedata = res; // Corrected property name
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  //s}

  // Helper method to clear the form fields
  // clearForm() {
  //   this.name = '';
  //   this.email = '';
  //   this.address = '';
  //   this.salary = '';
  // }
}
