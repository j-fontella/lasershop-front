import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosmenuComponent } from './pedidosmenu.component';

describe('PedidosmenuComponent', () => {
  let component: PedidosmenuComponent;
  let fixture: ComponentFixture<PedidosmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
