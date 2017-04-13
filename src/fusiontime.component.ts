import { Component, Input, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';

// TODO: FusionCharts object to be replaced by fusiontime-xt npm module definition.
declare var FusionCharts: Object;

@Component({
  selector: 'fusiontime',
  template: '<div></div>'
})
export class FusionTimeComponent implements OnInit, OnChanges {

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
        dataSource: this.dataSource
    };
  }

  // render the chart with configuration
  _renderChart(): void {
    this._setChartConfig();
    this.chart = new FusionCharts(this.config);
    this.chart.render();
  }

  ngOnInit(): void {
      this._renderChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // For now we need to call the `render` method
    // TODO: for width/height use => resizeTo() && for dataSource => rerender()
    if (this.chart && changes.hasOwnProperty("dataSource") && changes["dataSource"].currentValue) {
      this.config.dataSource = changes["dataSource"].currentValue;
      this._renderChart();
    }
  }

  ngOnDestroy() {
      if (this.chart) {
          this.chart.dispose();
      }
    }
}
