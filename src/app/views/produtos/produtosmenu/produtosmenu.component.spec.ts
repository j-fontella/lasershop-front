import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosmenuComponent } from './produtosmenu.component';

describe('ProdutosmenuComponent', () => {
  let component: ProdutosmenuComponent;
  let fixture: ComponentFixture<ProdutosmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
