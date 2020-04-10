import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteerComponent } from './steer.component';

describe('SteerComponent', () => {
  let component: SteerComponent;
  let fixture: ComponentFixture<SteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
