import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaListarComponent } from './receita-listar.component';

describe('ReceitaListarComponent', () => {
  let component: ReceitaListarComponent;
  let fixture: ComponentFixture<ReceitaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceitaListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
