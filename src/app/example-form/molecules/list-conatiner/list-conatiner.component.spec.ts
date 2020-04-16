import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConatinerComponent } from './list-conatiner.component';

describe('ListConatinerComponent', () => {
  let component: ListConatinerComponent;
  let fixture: ComponentFixture<ListConatinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConatinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConatinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
