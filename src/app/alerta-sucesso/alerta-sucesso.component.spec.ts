import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaSucessoComponent } from './alerta-sucesso.component';

describe('AlertaSucessoComponent', () => {
  let component: AlertaSucessoComponent;
  let fixture: ComponentFixture<AlertaSucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertaSucessoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertaSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
