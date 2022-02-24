import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDetalhaComponent } from './cliente-detalha.component';

describe('ClienteDetalhaComponent', () => {
  let component: ClienteDetalhaComponent;
  let fixture: ComponentFixture<ClienteDetalhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteDetalhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDetalhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
