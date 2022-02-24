import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCadastraComponent } from './cliente-cadastra.component';

describe('ClienteCadastraComponent', () => {
  let component: ClienteCadastraComponent;
  let fixture: ComponentFixture<ClienteCadastraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCadastraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCadastraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
