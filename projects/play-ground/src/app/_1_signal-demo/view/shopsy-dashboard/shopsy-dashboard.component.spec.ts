import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsyDashboardComponent } from './shopsy-dashboard.component';

describe('ShopsyDashboardComponent', () => {
  let component: ShopsyDashboardComponent;
  let fixture: ComponentFixture<ShopsyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopsyDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopsyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
