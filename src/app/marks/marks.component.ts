import { Component, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent implements OnInit {

  constructor() { }

  ngAfterViewInit() {
       var view = 0;
       var assignment = '<h3>Assignments</h3>';
       var test = '';

      function changeview()
      {
        var x = document.getElementById('lower-privilege');
        if (x.style.display === 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
            document.getElementById('higher-privilege').style.display = 'block';
        }
      }

      function getval( callback ){

           /*CURRENT: use mock file to get mock marks,so only the fst module in the module mock file will have marks
          i.e COS332
          */
          /*TO DO: request to the server to get the current modules assesment marks*/
           
            jQuery.getJSON("assets/data/marks_mock.json",function(json){

                assignment += '<table class="table"><tr><th>Assignment #:</th><th >Total:</th><th >Your mark:';
                assignment += '</th><th >Class average:</th><th >Query mark:</th></tr>';

                test += '<table class="table"><tr><th  style="width:20%">Test #:</th><th >Total:</th><th >Your mark:';
                test += '</th><th >Class average:</th><th >Query mark:</th></tr>';

                jQuery.each(json, function(key,value){

                  if(value.assessment_type == "Assignment")
                  {
                      assignment += "<tr><td>" + value.number + "</td><td>" + value.total +"</td><td>";
                      assignment += value.mark + "</td><td>" + value.class_average + "</td><td><button onclick='query()'>Query</button></td></tr>"; 
                  }
                  else
                  {
                      test += "<tr><td>" + value.number + "</td><td>" + value.total +"</td><td>";
                      test += value.mark + "</td><td>" + value.class_average + "</td><td><button onclick='query()'>Query</button></td></tr>"; 
                  }
                });//each

                
             });
             
          callback("null");//dummy - code above needs refactoring   
      }
      

      jQuery(document).ready(function(){  
        /*CURRENT: use mock file to get mock students modules*/
        /*TO DO: request to the server to get the current students modules*/

          getval( function ( val ) { 
                jQuery.getJSON("assets/data/modules_mock.json",function(json){
              
                var init = 0;
                var list = '';
                var html = '';
         
                jQuery.each(json, function(key,value){
                    if(init == 0)
                      list +=  '<li class="active"><a data-toggle="tab" href="#'+value.module+'">'+value.module+'</a></li>';
                    else
                        list +=  '<li><a data-toggle="tab" href="#'+value.module+'">'+value.module+'</a></li>';

                    

                    if(init == 0)
                    {
                      html += '<div id="'+value.module+ '" class="tab-pane fade in active">';
                      html += assignment ;
                      html += '<h3> Tests </h3>' + test + '</div>';
                    }
                    else
                    {
                      html += '<div id="'+value.module+ '" class="tab-pane fade ">';
                      html += '</div>';
                    }
                      
                     // alert(html); -- alerts the correct format, heading then table, but browser renders it as bothe headings first and then tables.. why?

                  jQuery('#module-list').append(list);
                  jQuery('.tab-content').append(html);

                  html = "";
                  list = "";
                  init++;
                });//each
                  
              });//getJSON  
            } );


        

         
        });//doc ready
    }

  ngOnInit() {
  }

}
