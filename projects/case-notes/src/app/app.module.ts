import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { Page1Component } from './page1/page1.component';


import { RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreComponent } from './core/core.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'case-notes', component: CoreComponent, children: [
        { path: 'page1/:id', component: Page1Component }
        
      ]},
      { path: '**', component: EmptyComponent }
    ], { useHash: true }),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    Page1Component,
    EmptyComponent,
    CoreComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule { 
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, { injector: this.injector})
    customElements.define('case-notes', appElement);
  }
}
