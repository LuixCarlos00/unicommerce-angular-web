import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoComponet } from '../../produto/ProdutoComponet';

describe('ProdutoComponent', () => {
  let component: ProdutoComponet;
  let fixture: ComponentFixture<ProdutoComponet>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoComponet],
    });
    fixture = TestBed.createComponent(ProdutoComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
