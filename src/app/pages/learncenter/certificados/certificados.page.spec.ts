import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertificadosPage } from './certificados.page';

describe('CertificadosPage', () => {
  let component: CertificadosPage;
  let fixture: ComponentFixture<CertificadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertificadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
