import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusiontimeComponent } from './fusiontime.component';

describe('FusiontimeComponent', () => {
  let component: FusiontimeComponent;
  let fixture: ComponentFixture<FusiontimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusiontimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusiontimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
