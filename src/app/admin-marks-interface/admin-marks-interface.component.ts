    import {Component} from "@angular/core";
    import {RedComponentComponent} from "../red-component/red-component.component";
    import {GridOptions} from "ag-grid/main";
    import {AgGridModule} from "ag-grid-angular";
    import { Router } from '@angular/router'

import { AuthService } from '../services/auth-service/auth.service';
import {UsersApi} from '../services/api-service/users-api/users-api';
    
@Component({
    selector: 'app-admin-marks-interface',
    templateUrl: './admin-marks-interface.component.html',
    styleUrls: ['./admin-marks-interface.component.scss']
  })
  export class AdminMarksInterfaceComponent {
        gridOptions: GridOptions;
        columnDefs: any[]
        rowData: any[];
        i=0;
        constructor(private router: Router, private authService: AuthService,private userService : UsersApi) {
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
        }

        ngOnInit() {
            this.getCurrentUser();
        }
        
        logout() {
            this.authService.logout();
            this.router.navigate(['/login']);
            this.getCurrentUser();
            this.getCurrentUser();
            }
            currentUser : any = {};
        
            getCurrentUser(){
            this.userService.getCurrentUser().subscribe((user) => {
            this.currentUser = user;
            }, (error) => {
            console.log("Error happened: " + error)
            });
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
    
    