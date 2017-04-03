import { Component, Input, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import * as FusionCharts from "fusioncharts";

@Component({
  selector: 'fusiontime',
  templateUrl: './fusiontime.component.html',
  styles: [':host { display: block; }']
})
export class FusiontimeComponent implements OnInit, OnChanges {

   @Input() dataSource: any;
   @Input() width: string;
   @Input() height: string;

   chart: any = {};
   config: any = {};

  constructor(private elementRef: ElementRef) {

  }

  renderChart(): void {
    this.config = {
        type: "timeseries",
        width: this.width,
        height: this.height,
        renderAt: this.elementRef.nativeElement,
        dataFormat: 'json',
        dataSource: {}
    };

    this.config.dataSource = clone(this.dataSource);
    this.chart = new FusionCharts(this.config);
    this.chart.render();
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    // Catch change and Act upon it
    console.log(changes);

    if (changes.hasOwnProperty("dataSource") && changes["dataSource"].currentValue) {
      console.log(changes["dataSource"].currentValue);
      this.config.dataSource = clone(changes["dataSource"].currentValue);
      this.renderChart();
    }
  }

  ngOnDestroy() {
      if (this.chart && this.chart.dispose) {
          this.chart.dispose();
      }
    }
}

var clone = function (obj) {
    if (obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
        return obj;
    var temp = obj.constructor();
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = clone(obj[key]);
            delete obj['isActiveClone'];
        }
    }
    return temp;
};
