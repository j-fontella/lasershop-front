import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDetalhaComponent } from './produtos-detalha.component';

describe('ProdutosDetalhaComponent', () => {
  let component: ProdutosDetalhaComponent;
  let fixture: ComponentFixture<ProdutosDetalhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosDetalhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosDetalhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
