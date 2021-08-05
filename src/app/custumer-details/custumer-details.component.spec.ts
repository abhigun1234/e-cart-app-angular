import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumerDetailsComponent } from './custumer-details.component';

describe('CustumerDetailsComponent', () => {
  let component: CustumerDetailsComponent;
  let fixture: ComponentFixture<CustumerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustumerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
