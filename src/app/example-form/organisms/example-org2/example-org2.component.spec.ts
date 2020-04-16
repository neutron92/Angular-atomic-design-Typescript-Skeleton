import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOrg2Component } from './example-org2.component';

describe('ExampleOrg2Component', () => {
  let component: ExampleOrg2Component;
  let fixture: ComponentFixture<ExampleOrg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleOrg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleOrg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
