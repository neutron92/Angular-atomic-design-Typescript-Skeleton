import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTemp2Component } from './example-temp2.component';

describe('ExampleTemp2Component', () => {
  let component: ExampleTemp2Component;
  let fixture: ComponentFixture<ExampleTemp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTemp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTemp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
