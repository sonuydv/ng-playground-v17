import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsDemoComponent } from './ngxs-demo.component';

describe('NgxsDemoComponent', () => {
  let component: NgxsDemoComponent;
  let fixture: ComponentFixture<NgxsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
