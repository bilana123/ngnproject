import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css'],
})
export class AgencyComponent {
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  // name: string = '';

  // saveagencyname() {
  //   var agency = {
  //     name: this.name,
  //   };
  //   this.api.saveagencyname(agency).subscribe(
  //     (res) => {
  //       alert('name added');
  //       this.name = '';
  //       console.log(res);
  //     },
  //     (error) => {
  //       console.log(error);
  //       alert('something went wrong');
  //     }
  //   );
  //}
}
