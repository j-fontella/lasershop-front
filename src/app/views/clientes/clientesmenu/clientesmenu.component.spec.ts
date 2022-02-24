import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesmenuComponent } from './clientesmenu.component';

describe('ClientesmenuComponent', () => {
  let component: ClientesmenuComponent;
  let fixture: ComponentFixture<ClientesmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
