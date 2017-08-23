import {Component, OnInit } from '@angular/core';
import {RedComponentComponent} from "../red-component/red-component.component";
import {GridOptions} from "ag-grid/main";
import {AgGridModule} from "ag-grid-angular";
import {ModulesApiService} from '../services/api-service/modules-service/modules-api.service';
import {Modules} from '../models/Modules';
import {Injectable} from '@angular/core';
import {ApiService} from '../services/api-service/api.service';
import { HttpModule } from '@angular/http';
import { AppConfig } from '../app.config';
@Component({
  selector: 'app-markers-mark-interface',
  templateUrl: './markers-mark-interface.component.html',
  providers: [ApiService,AppConfig,ModulesApiService],
  styleUrls: ['./markers-mark-interface.component.scss']
})

export class MarkersMarkInterfaceComponent {
    gridOptions: GridOptions;
    columnDefs: any[]
    rowData: any[];
    i=0;
    myModules: Modules;
    constructor(private modulesService : ModulesApiService) {
        
        
        this.gridOptions = <GridOptions>{rowSelection: 'multiple'};

        this.columnDefs = [
            {headerName: "ID", field: "id",editable:true},
            {headerName: "Total", field: "total", filter: 'number',editable:true,aggfunction:'sum'},
            
        ];

        this.rowData = [
            {id: "u15062440", total: "0"},
            {id: "u12345678", total: "0"},
            {id: "u20982211", total: "0"}
        ]
        this.getModules();
    }

    getModules()
    {
        this.modulesService.getAssessmentsByModule().subscribe(
            function(response) { this.myModules=response;console.log("Modules:"+this.myModules)},
            function(error) { console.log("Error happened here" + error)})
    }
    addColumn(colHeader)
    {
        var columnDefs = this.gridOptions.columnDefs;
        columnDefs.push({ field:'questions', headerName: 'Question '+ ++this.i,editable:true});
        this.gridOptions.api.setColumnDefs(columnDefs);
    }

    removeColumn()
    {
        var selectedRowData = this.gridOptions.api.getSelectedRows();
        this.gridOptions.api.updateRowData({remove: selectedRowData});
    }

    removeRow()
    {
        var selectedRowData = this.gridOptions.api.getSelectedRows();
        this.gridOptions.api.updateRowData({remove: selectedRowData});
    }

    addRow()
    {
        var transactions = {
            add: [ {id: "x", total: "0"},]
        }
        
        this.gridOptions.api.updateRowData(transactions);
    }
    
    onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

    selectAllRows() {
        this.gridOptions.api.selectAll();
    }
}

