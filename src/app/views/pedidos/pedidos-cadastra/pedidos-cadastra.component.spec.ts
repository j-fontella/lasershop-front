import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosCadastraComponent } from './pedidos-cadastra.component';

describe('PedidosCadastraComponent', () => {
  let component: PedidosCadastraComponent;
  let fixture: ComponentFixture<PedidosCadastraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosCadastraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosCadastraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
