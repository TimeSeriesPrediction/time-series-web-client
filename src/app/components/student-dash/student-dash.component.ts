import {Component, OnInit } from '@angular/core';
import {MdCardModule} from '@angular/material';
import {AuthService } from '../../services/auth-service/auth.service';
import {User} from '../../models/user-models/User';
import {Module} from '../../models/Module';
import {Injectable} from '@angular/core';
import {ApiService} from '../../services/api-service/api.service';
import {HttpModule } from '@angular/http';
import {AppConfig } from '../../app.config';
import { ModulesApi } from '../../services/api-service/modules-api/modules-api.service';
import { _ } from 'underscore';

@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  providers: [ApiService,AppConfig],
  styleUrls: ['./student-dash.component.scss']
})
export class StudentDashComponent implements OnInit {

  constructor( private authService: AuthService, private modulesApi: ModulesApi, private config: AppConfig) { }
  currentUser : User = new User();

  moduleList :string;
  csvName :string;
  date :string;
  imgName :string ="";

  modules: Array<Module> = [];
  staffModules: Module[] = [];
  ngOnInit()
  {
    this.getCurrentUser();
  }
  ///this is the get user stuff
  userName:string;

  getEnrolledModules() {
    this.modulesApi.getModulesByStudent().subscribe((mods) => {
      this.modules = mods;
      this.staffModules = _.filter(this.modules, (mod) => {
        return _.some(this.currentUser.permissions.modules, (m) => {
          return m.permission >= this.config.PERMISSION_TYPE.ADMIN_VIEW;
        });
      });
    });
  }

  getCurrentUser()
  {
      this.authService.getCurrentLoggedInUser().subscribe(
      (response) =>{
        this.currentUser = response;
        this.getEnrolledModules();
      },function(error) { console.log("Error happened" + error)});
  }
  ////this is the get modules stuff

  runStudentAnalysis()
  {
    this.date = Date.now().toString();
    this.authService.requestAnalysis(this.csvName, "1", this.date).subscribe(
      (response) =>{ 
        setTimeout(()=>{this.imgName="../../../assets/images/"+this.csvName+".png";},6000);
      },function(error) { console.log("Error happened" + error)});
  }

  runModuleAnalysis()
  {
    this.date = Date.now().toString();
    this.authService.requestAnalysis(this.csvName, "0", this.date).subscribe(
      (response) =>{ 
        setTimeout(()=>{this.imgName="../../../assets/images/"+this.csvName+".mod.png";},6000);
      },function(error) { console.log("Error happened" + error)});
  }

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
