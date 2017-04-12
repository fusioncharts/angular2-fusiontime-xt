import { ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class FusionTimeComponent implements OnInit, OnChanges {
    private elementRef;
    dataSource: any;
    width: string;
    height: string;
    chart: any;
    config: any;
    constructor(elementRef: ElementRef);
    _setChartConfig(): void;
    _renderChart(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
