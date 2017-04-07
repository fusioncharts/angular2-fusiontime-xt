## QuickStart
### Step 1: Import fusiontime module into your app.module.ts

```javascript
import { FusionTimeModule } from 'angular2-fusiontime-xt';

@NgModule({
declarations: [
  AppComponent
],
imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  FormsModule,
  FusionTimeModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
```

### Step 2: Use fusiontime component into target template
```html
<fusiontime [dataSource]="dataSource" [width]="width" [height]="height"></fusiontime>
```

### Step 3: Provide details
You need to pass height , width and dataSource.
```javascript
import {
Component,
OnInit
} from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  width = "850";
  height = "450";
  dataSource = {};

  ngOnInit() {
    this.dataSource = { }; // pass the chart config
  }
}
```
<h3>Licensing</h3>
<p>Angular 2 FusionTime is open-source and distributed under the terms of the MIT/X11 License. You will still need to download and include FusionCharts in your page. This project provides no direct functionality. You can <a href="http://fusioncharts.com/download/">Download an evaluation</a>.
  You will still need to purchase a FusionCharts license to use in a commercial environment (FusionCharts is <a href="http://www.fusioncharts.com/download/free/">free for non-commercial and personal use</a>) .</p>
