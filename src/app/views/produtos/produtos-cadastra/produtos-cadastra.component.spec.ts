import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosCadastraComponent } from './produtos-cadastra.component';

describe('ProdutosCadastraComponent', () => {
  let component: ProdutosCadastraComponent;
  let fixture: ComponentFixture<ProdutosCadastraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosCadastraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosCadastraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
