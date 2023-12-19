import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedLinksComponent } from './featured-links.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('FeaturedLinksComponent', () => {
  let component: FeaturedLinksComponent;
  let fixture: ComponentFixture<FeaturedLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedLinksComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({})
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
