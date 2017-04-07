import { Component, Input, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import * as FusionCharts from "fusioncharts";

@Component({
  selector: 'fusiontime',
  template: '<div></div>',
  styles: [':host { display: block; }']
})
export class FusiontimeComponent implements OnInit, OnChanges {

   @Input() dataSource: any;
   @Input() width: string;
   @Input() height: string;

   chart: any = {};
   config: any = {};

  constructor(private elementRef: ElementRef) {}

  _setChartConfig(): void {
    this.config = {
        type: "timeseries",
        width: this.width,
        height: this.height,
        renderAt: this.elementRef.nativeElement,
        dataFormat: 'json',
        dataSource: clone(this.dataSource)
    };
  }

  // render the chart with configuration
  _renderChart(): void {
    this._setChartConfig();
    this.chart = new FusionCharts(this.config);
    this.chart.render();
  }

  ngOnInit(): void {
    // Only render for the for first time
    if (!this.chart) {
      this._renderChart();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // For now we need to call the `render` method
    // TODO: for width/height use => resizeTo() && for dataSource => rerender()
    if (this.chart && changes.hasOwnProperty("dataSource") && changes["dataSource"].currentValue) {
      this.config.dataSource = clone(changes["dataSource"].currentValue);
      this._renderChart();
    }
  }

  ngOnDestroy() {
      if (this.chart) {
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
