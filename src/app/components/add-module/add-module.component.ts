import { Component, OnInit } from '@angular/core';
import {ModulesApi } from '../../services/api-service/modules-api/modules-api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.scss']
})
export class AddModuleComponent implements OnInit {

  constructor(private modulesApi: ModulesApi, private router: Router) { }

  name: string;
  code: string;

  ngOnInit() {
  }

  addModule() {
    this.modulesApi.addModule(this.name, this.code).subscribe((message) => {
      alert(message);
      this.router.navigate(['/student-dash']);
    });
  }

}
