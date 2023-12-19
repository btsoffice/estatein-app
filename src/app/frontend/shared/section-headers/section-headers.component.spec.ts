import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeadersComponent } from './section-headers.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('SectionHeadersComponent', () => {
  let component: SectionHeadersComponent;
  let fixture: ComponentFixture<SectionHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHeadersComponent],
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

    fixture = TestBed.createComponent(SectionHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
