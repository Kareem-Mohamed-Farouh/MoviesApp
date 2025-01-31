import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFaoudComponent } from './not-faoud.component';

describe('NotFaoudComponent', () => {
  let component: NotFaoudComponent;
  let fixture: ComponentFixture<NotFaoudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFaoudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFaoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
