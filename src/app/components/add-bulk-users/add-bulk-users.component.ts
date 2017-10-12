
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
import {AuthService} from  '../../services/auth-service/auth.service';
import {AddUserModel} from '../../models/user-models/AddUserModel';
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";

const Moment: any = (<any>moment).default || moment;
var data : any;


@Component({
  selector: 'app-assignments',
  templateUrl: './add-bulk-users.component.html',
  providers: [UsersApi,ApiService,AppConfig,AssessmentsApi],
  styleUrls: ['./add-bulk-users.component.scss'],
})

export class AddBulkUsersComponent {
 // dialogRef: MdDialogRef<ConfirmationDialogComponent>;
  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };
  public svisible: boolean[] = [
        true,
        false
    ];

    public user = {
      fullname :"",
      username : "",
      email : "",
      filename : ""
    }

   public myObj = new Array();
  constructor(private userService : UsersApi, 
    public authService : AuthService
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
    this.authService.getCurrentLoggedInUser().subscribe(
    (response)=> { this.currentUser=response},
    function(error) { console.log("Error happened" + error)}
);


  }
getModules()
  {

    this.authService.getCurrentLoggedInUser().subscribe(
    (response)=> { this.currentUser=response},
    function(error) { console.log("Error happened" + error)},
    );


}


public newUser : AddUserModel;
addSingleUser() 
{
  

  if(this.user.fullname == "" || this.user.username == "" || this.user.email == ""){
    alert("Please fill in all fields!");
    return;
  }

  this.newUser = new AddUserModel(this.user.username,this.user.fullname,this.user.email,"***");

  this.userService.addUser(this.newUser); 
  location.reload();

  alert(this.user.username + " " + this.user.fullname + " " + this.user.email);
}

addBulkUsers()
{
 
  
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

      var usernames = new Array();
      var fullnames = new Array();
      var emails = new Array();

      var count = 3;
    
    for(var i = 0; i < data.length; i++){

          usernames.push(data[i][0]);
          fullnames.push(data[i][1]);
          emails.push(data[i][2]);
    }

      //for(var t = 0; t < usernames.length; t++)
        //alert(usernames[t]);
        var txt = "Is this format correct? \n Username     Full Name     Email \n\n" ;

        for(var i = 0; i < data.length; i++){
          txt += usernames[i] + "     " + fullnames[i] + "     " + emails[i] + "\n";
          if(i > 9)
            break;
        }
        var r = confirm(txt);
        if (r == true) {
            //create the json objects

         //  var myObj = new Array();// check the structure of this object, it differs from one in postman :(
              
            for(var i = 0; i < data.length; i++){
                var obj = new AddUserModel(
                  usernames[i],
                  fullnames[i],
                  emails[i],
                   ""
                );

                this.myObj.push(obj);

            }
            this.userService.addUsers(this.myObj); 
            alert(JSON.stringify(this.myObj));
            
        } else {
            alert('Please provide a file with the right format.');
        }


    };
    reader.readAsBinaryString(target.files[0]);

   


}

}

