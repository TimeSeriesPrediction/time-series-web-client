import { Component, OnInit } from '@angular/core';
import {ModulesApi } from '../../services/api-service/modules-api/modules-api.service';
import { Router } from '@angular/router';
import {MdSnackBar,MdSnackBarModule} from '@angular/material';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.scss']
})
export class AddModuleComponent implements OnInit {

  constructor(private modulesApi: ModulesApi, private router: Router,private snackBar: MdSnackBar) { }

  name: string;
  code: string;

  ngOnInit() {
  }

  addModule() {

    this.modulesApi.addModule(this.name, this.code.toUpperCase().replace(' ', '')).subscribe((message) => {
      this.snackBar.open("Success: " + message + " !", 'OK', {
        duration: 4000,
      });

      this.router.navigate(['/student-dash']);
    });
  }

}
