import {Component, OnInit } from '@angular/core';
import {MdCardModule} from '@angular/material';
import {AuthService } from '../services/auth-service/auth.service';
import {UsersApi} from '../services/api-service/users-api/users-api.mock';
import {User} from '../models/User';
import {Modules} from '../models/Modules';
import {Injectable} from '@angular/core';
import {ApiService} from '../services/api-service/api.service';
import {HttpModule } from '@angular/http';
import {AppConfig } from '../app.config';
@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  providers: [UsersApi,ApiService,AppConfig],
  styleUrls: ['./student-dash.component.scss']
})
export class StudentDashComponent implements OnInit {

  constructor( private authService: AuthService,private userService : UsersApi) { }
  currentUser : User;
  public moduleList :string;
modules: Array<string> = [];;
  ngOnInit()
  {
    this.getCurrentUser();
  }
  ///this is the get user stuff
  userName:string;
  getCurrentUser(){
    this.userService.getCurrentUser().subscribe(
      (user) =>  { 
        this.currentUser = user;
        this.userName=this.currentUser.username;
        this.modules=this.currentUser.modules;
        this.moduleList=" ";
        for (var I = 0; I < this.modules.length; I++)
          {
               this.moduleList += this.currentUser.modules[I]+"\n";
          }
         
        },
    (error)=> { console.log("Error happened" + error)}
  )}
  ////this is the get modules stuff


 ///////this is the chart stuff
    public lineChartData:Array<any> = [
    {data: [40, 60,90, 40], label: 'Marks'},
   
  ];
  public lineChartLabels:Array<any> = ['Pluto', 'You', 'Daisy Duck','MickyMouse'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: '#17294D',
      pointBackgroundColor: 'black',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  
}
