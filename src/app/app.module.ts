import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FusiontimeModule } from './fusiontime/fusiontime.module';

import { ChartdemosComponent } from './chartdemos/chartdemos.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartdemosComponent
  ],
  imports: [
  //RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    FusiontimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
