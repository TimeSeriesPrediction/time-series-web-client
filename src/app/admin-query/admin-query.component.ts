import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-query',
  templateUrl: './admin-query.component.html',
  styleUrls: ['./admin-query.component.scss']
})
export class AdminQueryComponent implements OnInit {

    //CURRENT: some mock data for interface
    //TO DO: process data received from the server
    public modules;

  constructor() {
    this.modules =  [
        { code: 'COS301',
          queries :  [
            { code: 'COS 301', assType: 'Test', assNum: '5', student: 'u12345678', reason: "Please fix my mark." },
            { code: 'COS 301', assType: 'Assignment', assNum: '8', student: 'u12345678', reason: "Marks don't add up." },
            { code: 'COS 301', assType: 'Test', assNum: '10', student: 'u12345678', reason: "Please fix my mark." }
          ] },
        { code: 'COS132',
          queries:  [
            { code: 'COS 132', assType: 'Test', assNum: '2', student: 'u12345678', reason: "Please fix my mark." },
            { code: 'COS 132', assType: 'Assignment', assNum: '9', student: 'u12345678', reason: "Marks don't add up." },
            { code: 'COS 132', assType: 'Test', assNum: '5', student: 'u12345678', reason: "Please fix my mark." }
          ] },
        { code: 'COS212',
          queries: [
            { code: 'COS 212', assType: 'Test', assNum: '1', student: 'u12345678', reason: "Please fix my mark." },
            { code: 'COS 212', assType: 'Assignment', assNum: '2', student: 'u12345678', reason: "Marks don't add up." },
            { code: 'COS 212', assType: 'Test', assNum: '3', student: 'u12345678', reason: "Please fix my mark." }
          ] }
      ];

   }

   displayQuery(event)
   {
     alert(event);
     document.getElementById("display").innerHTML = document.getElementById(event).innerHTML;
   }

  ngOnInit() {
  }


    
}
