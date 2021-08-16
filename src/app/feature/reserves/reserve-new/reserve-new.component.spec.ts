import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveNewComponent } from './reserve-new.component';

describe('ReserveNewComponent', () => {
  let component: ReserveNewComponent;
  let fixture: ComponentFixture<ReserveNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
