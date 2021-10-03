import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecomponentComponent } from './timecomponent.component';

describe('TimecomponentComponent', () => {
  let component: TimecomponentComponent;
  let fixture: ComponentFixture<TimecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
