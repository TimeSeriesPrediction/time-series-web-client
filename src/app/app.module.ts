import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { UserMockServerProvider } from './users.mockserver';
//import { MockBackend, MockConnection } from '@angular/http/testing';
//import { BaseRequestOptions } from '@angular/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdInputModule, MdButtonModule, MdCheckboxModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppConfig } from './app.config'
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
=======
import { StudentQueryComponent } from './student-query/student-query.component';

>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    LoginComponent,
    DashboardComponent
=======
    StudentQueryComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< Updated upstream
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdCheckboxModule,
    AppRoutingModule
=======
    AppRoutingModule,
    ReactiveFormsModule
>>>>>>> Stashed changes
  ],
  providers: [
    AppConfig,
    AuthGuard, 
    AuthService,
    //UserMockServerProvider,
    //MockBackend,
    //BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
