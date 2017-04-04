import { Component, OnInit } from '@angular/core';

import tsData from '../../assets/datarepo/';

declare var Prism: any;

@Component({
  selector: 'app-chartdemos',
  templateUrl: './chartdemos.component.html',
  styleUrls: ['./chartdemos.component.css']
})
export class ChartdemosComponent implements OnInit {

  width = "850";
  height = "450";

  dataSource = {};
  tsData = {};
  chartsData = {};

  constructor() {
  }

  ngOnInit() {
    this.chartsData = Object.keys(tsData);
    this.tsData = tsData;
    this.dataSource = this.tsData[this.chartsData[0]].data;
    Prism.highlightAll();
  }

  onLinkClick(selectedItem) {
    this.dataSource = this.tsData[selectedItem].data;
    Prism.highlightAll();
  }

}
