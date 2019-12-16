import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../../../../src/app/eventbus.service';
@Component({
  template: `
  <div class="card">
  <div class="header">
    <h1>Offices</h1>
  </div>
  <div class="content">
  <button class="btn btn-primary">Create New </button>
  <a href="#/case-notes/page1/2" class="btn btn-primary">Go To Case Notes  </a>
<table class="table table-contensed table-striped">
    <thead>
    <tr>
        <th>Office</th>
        <th>WDA</th>
        <th>Created</th>
        <th>Closed Date</th>
        <th> Actions </th>
    </tr>
    </thead>
    <tr>
        <td>1030 Office</td>
        <td>1030 WIB</td>
        <td>12/12/2017</td>
        <td>12/12/2019</td>
        <td></td>
    </tr>
    <tr>
        <td>1030 Office</td>
        <td>1030 WIB</td>
        <td>12/12/2017</td>
        <td>12/12/2019</td>
        <td></td>
    </tr>
    <tr>
        <td>1030 Office</td>
        <td>1030 WIB</td>
        <td>12/12/2017</td>
        <td>12/12/2019</td>
        <td></td>
    </tr>
    <tr>
        <td>1030 Office</td>
        <td>1030 WIB</td>
        <td>12/12/2017</td>
        <td>12/12/2019</td>
        <td></td>
    </tr>
    <tr>
        <td>1030 Office</td>
        <td>1030 WIB</td>
        <td>12/12/2017</td>
        <td>12/12/2019</td>
        <td></td>
    </tr>
    <tr>
        <td>1030 Office</td>
        <td>1030 WIB</td>
        <td>12/12/2017</td>
        <td>12/12/2019</td>
        <td></td>
    </tr>
    <tr>
        <td>1030 Office</td>
        <td>1030 WIB</td>
        <td>12/12/2017</td>
        <td>12/12/2019</td>
        <td></td>
    </tr>
    <tr>
        <td>1030 Office</td>
        <td>1030 WIB</td>
        <td>12/12/2017</td>
        <td>12/12/2019</td>
        <td></td>
    </tr>
    <tr>
        <td>1030 Office</td>
        <td>1030 WIB</td>
        <td>12/12/2017</td>
        <td>12/12/2019</td>
        <td></td>
    </tr>
    <tr>
        <td>1030 Office</td>
        <td>1030 WIB</td>
        <td>12/12/2017</td>
        <td>12/12/2019</td>
        <td></td>
    </tr>
    <tr>
        <td>1030 Office</td>
        <td>1030 WIB</td>
        <td>12/12/2017</td>
        <td>12/12/2019</td>
        <td></td>
    </tr>
    <tr>
        <td>1030 Office</td>
        <td>1030 WIB</td>
        <td>12/12/2017</td>
        <td>12/12/2019</td>
        <td></td>
    </tr>
    <tr>
        <td>1030 Office</td>
        <td>1030 WIB</td>
        <td>12/12/2017</td>
        <td>12/12/2019</td>
        <td></td>
    </tr>
    </table>
</div>
</div>
  `
})
export class Page1Component implements OnInit {
    constructor(private eventBusService: EventBusService) { }
    ngOnInit() {
        this.eventBusService.on('SelectPage1Detail', (data:any) => {

           console.log("Hello ngonit");
        });

        document.addEventListener("build", function(event) { // (1)
            //alert("Hello from "); // Hello from H1
            console.log('hello from');
          });
       
      }
}
