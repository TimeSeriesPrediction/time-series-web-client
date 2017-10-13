import { Component, OnInit } from '@angular/core';
import {UsersApi} from '../../services/api-service/users-api/users-api.service';
import {AuthService} from  '../../services/auth-service/auth.service';
import {User} from '../../models/user-models/User';
import {AppConfig} from '../../app.config';

@Component({
  selector: 'app-staff-to-module',
  templateUrl: './staff-to-module.component.html',
  styleUrls: ['./staff-to-module.component.scss']
})
export class StaffToModuleComponent implements OnInit {

   // dialogRef: MdDialogRef<ConfirmationDialogComponent>;
  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };
  public svisible: boolean[] = [
        true,
        false
    ];

    

   public myObj = new Array();
  constructor(private userService : UsersApi, 
    public authService : AuthService,
    public conf : AppConfig
   )
  {
    
  }

  public staff = {
      module :"",
      username : "",
      permission : 0
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

staffToModule() 
{
  

  if(this.staff.module == "" || this.staff.username == "" || this.staff.permission == null){
    alert("Please fill in all fields!");
    return;
  }

  var obj = null;

  switch(this.staff.permission) {
    case 1:
        obj = this.staff.permission;
        break;
    case 2:
        obj = this.staff.permission;
        break;
    case 3:
        obj = this.staff.permission;
        break;
    case 4:
       obj = this.staff.permission;
        break;
    default:
        alert("Please choose a number between 1 - 4.");
} 


  //this.userService.addUser(this.newUser); 
  //location.reload();

  alert(this.staff.module + " " + this.staff.username + " " + this.staff.permission);
}

}
