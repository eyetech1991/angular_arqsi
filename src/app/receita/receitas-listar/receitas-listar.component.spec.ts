import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasListarComponent } from './receitas-listar.component';

describe('ReceitasListarComponent', () => {
  let component: ReceitasListarComponent;
  let fixture: ComponentFixture<ReceitasListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceitasListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
