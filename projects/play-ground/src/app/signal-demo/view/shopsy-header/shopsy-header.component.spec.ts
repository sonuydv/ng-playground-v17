import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsyHeaderComponent } from './shopsy-header.component';

describe('ShopsyHeaderComponent', () => {
  let component: ShopsyHeaderComponent;
  let fixture: ComponentFixture<ShopsyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopsyHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopsyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
