import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedFaqComponent } from './featured-faq.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('FeaturedFaqComponent', () => {
  let component: FeaturedFaqComponent;
  let fixture: ComponentFixture<FeaturedFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedFaqComponent],
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

    fixture = TestBed.createComponent(FeaturedFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
