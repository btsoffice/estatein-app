import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTestimonialsComponent } from './featured-testimonials.component';

describe('FeaturedTestimonialsComponent', () => {
  let component: FeaturedTestimonialsComponent;
  let fixture: ComponentFixture<FeaturedTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedTestimonialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
