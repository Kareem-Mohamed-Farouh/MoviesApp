import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondeNavBarComponent } from './seconde-nav-bar.component';

describe('SecondeNavBarComponent', () => {
  let component: SecondeNavBarComponent;
  let fixture: ComponentFixture<SecondeNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondeNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
