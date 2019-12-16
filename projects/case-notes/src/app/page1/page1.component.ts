import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../../../../src/app/eventbus.service';
import { EventData } from '../../../../../src/app/event.class';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  template: `
  <div class="card">
    <div class="header">
      <h1>Case Notes</h1>
    </div>
    <div class="content">
    <button class="btn btn-primary" id="elem" (click)="youClickMe($event.target)">Create New </button>
  <table class="table table-contensed table-striped">
      <thead>
      <tr>
          <th>Created By</th>
          <th>Note Date</th>
          <th>Case Note Title</th>
          <th>Service Names</th>
          <th> Actions </th>
      </tr>
      </thead>
      <tr>
          <td>Christopher John</td>
          <td>12/12/2019</td>
          <td>case pending</td>
          <td>Employee Turn Over Analysis</td>
          <td></td>
      </tr>
      <tr>
        <td>Christopher John</td>
        <td>12/12/2019</td>
        <td>case pending</td>
        <td>Employee Turn Over Analysis</td>
        <td></td>
      </tr>
      <tr>
        <td>Christopher John</td>
        <td>12/12/2019</td>
        <td>case pending</td>
        <td>Employee Turn Over Analysis</td>
        <td></td>
      </tr>
      <tr>
        <td>Christopher John</td>
        <td>12/12/2019</td>
        <td>case pending</td>
        <td>Employee Turn Over Analysis</td>
        <td></td>
      </tr>
      <tr>
        <td>Christopher John</td>
        <td>12/12/2019</td>
        <td>case pending</td>
        <td>Employee Turn Over Analysis</td>
        <td></td>
      </tr>
      <tr>
        <td>Christopher John</td>
        <td>12/12/2019</td>
        <td>case pending</td>
        <td>Employee Turn Over Analysis</td>
        <td></td>
      </tr>
      <tr>
        <td>Christopher John</td>
        <td>12/12/2019</td>
        <td>case pending</td>
        <td>Employee Turn Over Analysis</td>
        <td></td>
      </tr>
      <tr>
        <td>Christopher John</td>
        <td>12/12/2019</td>
        <td>case pending</td>
        <td>Employee Turn Over Analysis</td>
        <td></td>
      </tr>
      <tr>
        <td>Christopher John</td>
        <td>12/12/2019</td>
        <td>case pending</td>
        <td>Employee Turn Over Analysis</td>
        <td></td>
      </tr>
      <tr>
        <td>Christopher John</td>
        <td>12/12/2019</td>
        <td>case pending</td>
        <td>Employee Turn Over Analysis</td>
        <td></td>
      </tr>

      </table>
  </div>
  `
})
export class Page1Component  {
  id;
  sub;
  constructor(private eventBusService: EventBusService,
    private _Activatedroute:ActivatedRoute) { }
    ngOnInit() {
 
      this.sub=this._Activatedroute.paramMap.subscribe(params => { 
         console.log(params);
          this.id = params.get('id'); 
          console.log("id is" + this.id);
      });
    
 
      // This params is deprecated
 
      //this.sub=this._Activatedroute.params.subscribe(params => { 
      //    this.id = params['id']; 
      //    let products=this._productService.getProducts();
      //    this.product=products.find(p => p.productID==this.id);    
      //
      //});
   }
   ngOnDestroy() {
    this.sub.unsubscribe();
  }
  youClickMe(elem){
    
    this.eventBusService.emit(new EventData('SelectPage1Detail', "Came from Case Notes"));
   // const event = new CustomEvent('build', { detail: 'testing' });
   // let event = new Event('build');
    //elem.dispatchEvent(event);

  }
}
