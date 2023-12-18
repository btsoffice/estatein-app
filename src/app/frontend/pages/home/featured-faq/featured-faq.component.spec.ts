import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedFaqComponent } from './featured-faq.component';

describe('FeaturedFaqComponent', () => {
  let component: FeaturedFaqComponent;
  let fixture: ComponentFixture<FeaturedFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedFaqComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
