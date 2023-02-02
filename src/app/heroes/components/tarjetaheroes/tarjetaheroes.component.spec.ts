import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaheroesComponent } from './tarjetaheroes.component';

describe('TarjetaheroesComponent', () => {
  let component: TarjetaheroesComponent;
  let fixture: ComponentFixture<TarjetaheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaheroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
