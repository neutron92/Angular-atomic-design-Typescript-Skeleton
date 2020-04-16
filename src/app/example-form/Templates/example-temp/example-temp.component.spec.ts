import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTempComponent } from './example-temp.component';

describe('ExampleTempComponent', () => {
  let component: ExampleTempComponent;
  let fixture: ComponentFixture<ExampleTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
