import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotTimerComponent } from './jackpot-timer.component';

describe('JackpotTimerComponent', () => {
  let component: JackpotTimerComponent;
  let fixture: ComponentFixture<JackpotTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JackpotTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
