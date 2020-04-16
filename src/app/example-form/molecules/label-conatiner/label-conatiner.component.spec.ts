import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelConatinerComponent } from './label-conatiner.component';

describe('LabelConatinerComponent', () => {
  let component: LabelConatinerComponent;
  let fixture: ComponentFixture<LabelConatinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelConatinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
