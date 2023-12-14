import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedLinksComponent } from './featured-links.component';

describe('FeaturedLinksComponent', () => {
  let component: FeaturedLinksComponent;
  let fixture: ComponentFixture<FeaturedLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedLinksComponent]
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
