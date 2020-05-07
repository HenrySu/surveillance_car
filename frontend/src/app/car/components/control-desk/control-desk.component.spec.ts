import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDeskComponent } from './control-desk.component';

describe('ControlDeskComponent', () => {
  let component: ControlDeskComponent;
  let fixture: ComponentFixture<ControlDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
