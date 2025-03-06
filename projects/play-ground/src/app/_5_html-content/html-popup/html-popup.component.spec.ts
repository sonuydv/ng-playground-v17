import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPopupComponent } from './html-popup.component';

describe('HtmlPopupComponent', () => {
  let component: HtmlPopupComponent;
  let fixture: ComponentFixture<HtmlPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
