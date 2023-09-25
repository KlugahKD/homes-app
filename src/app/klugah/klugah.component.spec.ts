import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlugahComponent } from './klugah.component';

describe('KlugahComponent', () => {
  let component: KlugahComponent;
  let fixture: ComponentFixture<KlugahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KlugahComponent]
    });
    fixture = TestBed.createComponent(KlugahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
