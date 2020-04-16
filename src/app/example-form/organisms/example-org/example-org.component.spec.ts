import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOrgComponent } from './example-org.component';

describe('ExampleOrgComponent', () => {
  let component: ExampleOrgComponent;
  let fixture: ComponentFixture<ExampleOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
