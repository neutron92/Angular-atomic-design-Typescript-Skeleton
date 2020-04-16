import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOrg3Component } from './example-org3.component';

describe('ExampleOrg3Component', () => {
  let component: ExampleOrg3Component;
  let fixture: ComponentFixture<ExampleOrg3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleOrg3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleOrg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
