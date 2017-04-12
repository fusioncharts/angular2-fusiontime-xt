"use strict";
var core_1 = require('@angular/core');
var fusiontime_component_1 = require('./fusiontime.component');
var FusionTimeModule = (function () {
    function FusionTimeModule() {
    }
    FusionTimeModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [fusiontime_component_1.FusionTimeComponent],
                    exports: [fusiontime_component_1.FusionTimeComponent]
                },] },
    ];
    /** @nocollapse */
    FusionTimeModule.ctorParameters = function () { return []; };
    return FusionTimeModule;
}());
exports.FusionTimeModule = FusionTimeModule;
