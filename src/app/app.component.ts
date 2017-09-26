import { Component } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker'
import { AuthGuard } from './services/auth-guard/auth.guard';
import { AuthService } from './services/auth-service/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { MdCardModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppConfig } from './app.config';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GradingComponent } from './grading/grading.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { WeightingsComponent } from './weightings/weightings.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 

 
  constructor() {
  }

 }
