import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditLapizComponent } from './btn-edit-lapiz.component';

describe('BtnEditLapizComponent', () => {
  let component: BtnEditLapizComponent;
  let fixture: ComponentFixture<BtnEditLapizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnEditLapizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnEditLapizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
