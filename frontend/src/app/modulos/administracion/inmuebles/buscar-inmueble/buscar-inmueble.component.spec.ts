import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarInmuebleComponent } from './buscar-inmueble.component';

describe('BuscarInmueblesComponent', () => {
  let component: BuscarInmuebleComponent;
  let fixture: ComponentFixture<BuscarInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarInmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
