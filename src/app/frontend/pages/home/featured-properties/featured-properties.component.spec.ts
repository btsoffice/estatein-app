import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPropertiesComponent } from './featured-properties.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('FeaturedPropertiesComponent', () => {
  let component: FeaturedPropertiesComponent;
  let fixture: ComponentFixture<FeaturedPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedPropertiesComponent],
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

    fixture = TestBed.createComponent(FeaturedPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
