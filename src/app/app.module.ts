import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FusiontimeModule } from './fusiontime/fusiontime.module';
import { AppleComponent } from './apple/apple.component';
import { EbolaComponent } from './ebola/ebola.component';
import { SlackComponent } from './slack/slack.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { ChartdemosComponent } from './chartdemos/chartdemos.component';

// const appRoutes: Routes = [
//   {
//     path: '', component: AppleComponent
//   },
//   {
//     path: 'web', component: WebComponent
//   },
//   {
//     path: 'ebola', component: EbolaComponent
//   },
//   {
//     path: 'mobile', component: MobileComponent
//   },
//   {
//     path: 'slack', component: SlackComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    AppleComponent,
    EbolaComponent,
    SlackComponent,
    WebComponent,
    MobileComponent,
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
