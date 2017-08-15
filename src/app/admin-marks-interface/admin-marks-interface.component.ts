    import {Component} from "@angular/core";
    import {RedComponentComponent} from "../red-component/red-component.component";
    import {GridOptions} from "ag-grid/main";
    import {AgGridModule} from "ag-grid-angular";
    
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
        constructor() {
            this.gridOptions = <GridOptions>{};
    
            this.columnDefs = [
                {headerName: "ID", field: "id"},
                {headerName: "Total", field: "total", filter: 'number',editable:true,aggfunction:'sum'},
                
            ];
    
            this.rowData = [
                {id: "u15062440", total: "0"},
                {id: "u12345678", total: "0"},
                {id: "u20982211", total: "0"}
            ]
        }
    
        addColumn(colHeader)
        {
            var columnDefs = this.gridOptions.columnDefs;
            columnDefs.push({ field:'questions', headerName: 'Question '+ ++this.i,editable:true});
            this.gridOptions.api.setColumnDefs(columnDefs);
        }
        
        onGridReady(params) {
            params.api.sizeColumnsToFit();
        }
    
        selectAllRows() {
            this.gridOptions.api.selectAll();
        }
    }
    
    