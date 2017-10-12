
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  forwardRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SlimScrollOptions } from 'ng2-slimscroll';
import * as moment from 'moment';
import {UsersApi} from '../../services/api-service/users-api/users-api.service';
import {AssessmentsApi} from '../../services/api-service/assessments-api/assessments-api.service';
import {User} from '../../models/user-models/User';
import {Assessment} from '../../models/Assessment';
import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api-service/api.service';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../../app.config';
import * as XLSX from 'xlsx';
import {AuthService} from '../../services/auth-service/auth.service';

const Moment: any = (<any>moment).default || moment;
var data : any;


@Component({
  selector: 'app-assignments',
  templateUrl: './add-bulk-users.component.html',
  providers: [UsersApi,ApiService,AppConfig,AssessmentsApi],
  styleUrls: ['./add-bulk-users.component.scss'],
})

export class AddBulkUsersComponent {

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };
  public svisible: boolean[] = [
        true,
        false
    ];

  constructor(private userService : UsersApi, private auth: AuthService)
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
    this.auth.getCurrentLoggedInUser().subscribe(
    function(response) { this.currentUser=response},
    function(error) { console.log("Error happened" + error)}
);


  }
getModules()
  {

    this.auth.getCurrentLoggedInUser().subscribe(
    function(response) { this.currentUser=response},
    function(error) { console.log("Error happened" + error)},
    function()
    {
      document.getElementById("sel1").innerHTML = "";
      for (var I = 0; I < this.currentUser.modules.length; I++)
      {
          var moduleList = "<option>" + this.currentUser.modules[I] + "</option>";
          document.getElementById("sel1").innerHTML += moduleList;

      }
    });


}


newUser : User;
addSingleUser() // why does alll the form elements disappear
{
  var FullName = (document.getElementById("in1")) as HTMLSelectElement;
  var fname = FullName.value;

  var Username = document.getElementById('in2') as HTMLInputElement;
  var uname = Username.value;

  var Email = document.getElementById('in3') as HTMLInputElement;
  var email = Email.value;

  if(fname == "" || uname == "" || email == ""){
    alert("Please fill in all fields!");
    return;
  }


  alert("Name: " + fname + " Username: " + uname + " Email: " + email);

  this.userService.addUser(uname,"",email); //is this right? - add full name?
  location.reload();
}

addBulkUsers()
{
  var fileName = (document.getElementById("in4")) as HTMLSelectElement;
  var fname = fileName.value;

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
      data = (XLSX.utils.sheet_to_json(ws, {header: 1}));
    };
    reader.readAsBinaryString(target.files[0]);
    alert(target.files[0]);
  }
}

