import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myImage: string = '/../assets/images/medical_group.png'
  introMessage: string = 'NavJeevan project is aiming to provide healthcare ' +
  'to everyone, like consulting with virtual doctors and getting information' +
  ' about their disease. Users can also get information about their medication.';

}
