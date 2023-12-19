import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTestimonialsComponent } from './featured-testimonials.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('FeaturedTestimonialsComponent', () => {
  let component: FeaturedTestimonialsComponent;
  let fixture: ComponentFixture<FeaturedTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedTestimonialsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({}),
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
