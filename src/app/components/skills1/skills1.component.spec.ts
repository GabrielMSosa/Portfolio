import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skills1Component } from './skills1.component';

describe('Skills1Component', () => {
  let component: Skills1Component;
  let fixture: ComponentFixture<Skills1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Skills1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Skills1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
