import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartdemosComponent } from './chartdemos.component';

describe('ChartdemosComponent', () => {
  let component: ChartdemosComponent;
  let fixture: ComponentFixture<ChartdemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartdemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartdemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
