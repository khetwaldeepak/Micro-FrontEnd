import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  // selector: 'client-b',
  template: `
      <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnInit {

  @Input('state') 
  set state(state: string) {
      console.debug('offices received state', state);
  }

  @Output() message = new EventEmitter<any>();

  constructor(
    private router: Router) {
  }

  ngOnInit() {
    this.router.initialNavigation(); // Manually triggering initial navigation for @angular/elements ?
    
    // Standalone mode
    if (environment.standalone) {
      this.router.navigate(['/offices/page1']);
    }
    
    // just for demonstration!
    setTimeout(() => { 
      this.message.next('offices initialized!');
    }, 2000);
    
  }
}
