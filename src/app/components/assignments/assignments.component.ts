
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
import {AssessmentsApi} from '../../services/api-service/assessments-api/assessments-api.service';
import {User} from '../../models/user-models/User';
import {Assessment} from '../../models/Assessment';
import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api-service/api.service';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../../app.config';
import { AuthService} from '../../services/auth-service/auth.service';
import { NgFor } from '@angular/common';
import { NgIf} from '@angular/common';
const Moment: any = (<any>moment).default || moment;


@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  providers: [ApiService,AppConfig,AssessmentsApi],
  styleUrls: ['./assignments.component.scss'],
})

export class AssignmentsComponent {

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };
  public currentUser : User;

  constructor(private authService : AuthService, private assessmentService : AssessmentsApi)
  {

  }
  ngOnInit()
  {
    this.getCurrentUser();

  }

  getCurrentUser()
  {
    this.authService.getCurrentLoggedInUser().subscribe(
    (response) =>{ this.currentUser = response},
    function(error) { console.log("Error happened" + error)
  }
);


  }
getModules()
  {

    this.authService.getCurrentLoggedInUser().subscribe(
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


newAssignment : Assessment;
addAssignment()
{
  var DropdownList = (document.getElementById("sel1")) as HTMLSelectElement;
  var option = DropdownList.options[DropdownList.selectedIndex] as HTMLOptionElement;
  var selected = option.value;
  alert("entered name: "+selected);
  var input1= document.getElementById('usr') as HTMLInputElement;
  var name = input1.value;
  var dateInput= document.getElementById('usr1') as HTMLInputElement;
  var date =dateInput.value;
  var linkIput = document.getElementById('for-file') as HTMLInputElement;
  var link = linkIput.value;

  var newAssignment = new Assessment(name, 10, selected, date, link) //TODO: Hardcoded weight - please fix
  this.assessmentService.addAssessment(selected, new Date().getFullYear(), newAssignment);
}

}

