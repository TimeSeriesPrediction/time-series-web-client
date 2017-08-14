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
    
        constructor() {
            this.gridOptions = <GridOptions>{};
    
            this.columnDefs = [
                {headerName: "ID", field: "id"},
                {headerName: "Total", field: "total", cellRendererFramework: RedComponentComponent},
                {headerName: "Questions", field: "questions"}
            ];
    
            this.rowData = [
                {id: "u15062440", total: "100", questions: 35000},
                {id: "u12345678", total: "88", questions: 32000},
                {id: "u20982211", total: "43", questions: 72000}
            ]
        }
    
        onGridReady(params) {
            params.api.sizeColumnsToFit();
        }
    
        selectAllRows() {
            this.gridOptions.api.selectAll();
        }
    }
    
    