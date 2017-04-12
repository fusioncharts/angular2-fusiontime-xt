"use strict";
var core_1 = require('@angular/core');
var FusionCharts = require("fusioncharts");
var FusionTimeComponent = (function () {
    function FusionTimeComponent(elementRef) {
        this.elementRef = elementRef;
        this.chart = {};
        this.config = {};
    }
    FusionTimeComponent.prototype._setChartConfig = function () {
        this.config = {
            type: "timeseries",
            width: this.width,
            height: this.height,
            renderAt: this.elementRef.nativeElement,
            dataFormat: 'json',
            dataSource: this.dataSource
        };
    };
    // render the chart with configuration
    FusionTimeComponent.prototype._renderChart = function () {
        this._setChartConfig();
        this.chart = new FusionCharts(this.config);
        this.chart.render();
    };
    FusionTimeComponent.prototype.ngOnInit = function () {
        this._renderChart();
    };
    FusionTimeComponent.prototype.ngOnChanges = function (changes) {
        // For now we need to call the `render` method
        // TODO: for width/height use => resizeTo() && for dataSource => rerender()
        if (this.chart && changes.hasOwnProperty("dataSource") && changes["dataSource"].currentValue) {
            this.config.dataSource = changes["dataSource"].currentValue;
            this._renderChart();
        }
    };
    FusionTimeComponent.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.dispose();
        }
    };
    FusionTimeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'fusiontime',
                    template: '<div></div>'
                },] },
    ];
    /** @nocollapse */
    FusionTimeComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    FusionTimeComponent.propDecorators = {
        'dataSource': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
    };
    return FusionTimeComponent;
}());
exports.FusionTimeComponent = FusionTimeComponent;
