import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component01Component } from './component01/component01.component';
import { Component02Component } from './component02/component02.component';

@NgModule({
  declarations: [
    AppComponent,
    Component01Component,
    Component02Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
