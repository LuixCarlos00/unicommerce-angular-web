import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoComponent } from '../../produto/ProdutoComponet';

describe('ProdutoComponent', () => {
  let component: ProdutoComponent;
  let fixture: ComponentFixture<ProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoComponent],
    });
    fixture = TestBed.createComponent(ProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
