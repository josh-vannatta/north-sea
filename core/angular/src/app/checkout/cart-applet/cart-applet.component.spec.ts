import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAppletComponent } from './cart-applet.component';

describe('CartAppletComponent', () => {
  let component: CartAppletComponent;
  let fixture: ComponentFixture<CartAppletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartAppletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAppletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
