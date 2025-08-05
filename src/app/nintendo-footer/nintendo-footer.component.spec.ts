import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NintendoFooterComponent } from './nintendo-footer.component';

describe('NintendoFooterComponent', () => {
  let component: NintendoFooterComponent;
  let fixture: ComponentFixture<NintendoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NintendoFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NintendoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
