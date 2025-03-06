import { ComponentFixture, TestBed } from '@angular/core/testing';

import { _5_HtmlContentComponent } from './_5_-html-content.component';

describe('HtmlContentComponent', () => {
  let component: _5_HtmlContentComponent;
  let fixture: ComponentFixture<_5_HtmlContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [_5_HtmlContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(_5_HtmlContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
