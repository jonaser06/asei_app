import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardCertificadoComponent } from './card-certificado.component';

describe('CardCertificadoComponent', () => {
  let component: CardCertificadoComponent;
  let fixture: ComponentFixture<CardCertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCertificadoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
