import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {AuthService} from  '../../services/auth-service/auth.service';
import {AddUserModel} from '../../models/user-models/AddUserModel';
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {ModulesApi} from '../../services/api-service/modules-api/modules-api.service';

import {Module} from '../../models/Module';

import {MdSnackBar,MdSnackBarModule} from '@angular/material';


@Component({
  selector: 'app-enroll-students',
  templateUrl: './enroll-students.component.html',
  styleUrls: ['./enroll-students.component.scss']
})
export class EnrollStudentsComponent implements OnInit {

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };
  public svisible: boolean[] = [
        true,
        false
    ];

    public enroll = {
      code :"",
      year : 0,
      filename : ""
    }

    private data;
    private users: string[];
   public myObj = new Array();
     public modules :Module[];

  constructor(private moduleService : ModulesApi,
    public authService : AuthService,

    private modulesApi: ModulesApi,

    private snackBar: MdSnackBar

   )
  {

  }
  ngOnInit()
  {
    this.getCurrentUser();
    this.getModules();
  }

  public currentUser : User;

  getCurrentUser()
  {
    this.authService.getCurrentLoggedInUser().subscribe((response)=>
    {
      this.currentUser=response
    },
    (error) => {
      console.log("Error happened" + error)
    });
  }

  getModules() {
    this.modulesApi.getAllModules().subscribe((mods) => {
      this.modules = mods;
    });
  }


public newUser : AddUserModel;
enrollStudents()
{


  if(this.enroll.code == "" || this.enroll.year == 0 ){
    this.snackBar.open("Failure: Please fill in al the fields!", 'OK', {
      duration: 4000,
    });
    return;
  }

    this.moduleService.enrollStudents(this.enroll.code,this.enroll.year,this.users).subscribe((message) => {
      this.snackBar.open("Success: "+ message +"!", 'OK', {
        duration: 4000,
      });
  });


}

onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = (XLSX.utils.sheet_to_json(ws, {header: 1}));

      var users = new Array();


      var count = 3;

    for(var i = 0; i < this.data.length; i++){

          users.push(this.data[i][0]);
    }

      //for(var t = 0; t < usernames.length; t++)
        //alert(usernames[t]);
        /*var txt = "Is this format correct? \n Username\n\n" ;

        for(var i = 0; i < this.data.length; i++){
          txt += users[i];
          if(i > 9)
            break;
        }
        var r = confirm(txt);
        if (r == true) {*/
            //create the json objects
            this.users = users;
       /* } else {
            alert('Please provide a file with the right format.');
        }*/


    };
    reader.readAsBinaryString(target.files[0]);




}


}
