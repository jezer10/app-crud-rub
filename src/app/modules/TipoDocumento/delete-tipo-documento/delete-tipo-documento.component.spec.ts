import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTipoDocumentoComponent } from './delete-tipo-documento.component';

describe('DeleteTipoDocumentoComponent', () => {
  let component: DeleteTipoDocumentoComponent;
  let fixture: ComponentFixture<DeleteTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTipoDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
