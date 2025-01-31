import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResposnerComponent } from './resposner.component';

describe('ResposnerComponent', () => {
  let component: ResposnerComponent;
  let fixture: ComponentFixture<ResposnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResposnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResposnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
