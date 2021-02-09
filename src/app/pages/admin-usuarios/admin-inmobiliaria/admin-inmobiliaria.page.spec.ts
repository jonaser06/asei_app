import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminInmobiliariaPage } from './admin-inmobiliaria.page';

describe('AdminInmobiliariaPage', () => {
  let component: AdminInmobiliariaPage;
  let fixture: ComponentFixture<AdminInmobiliariaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInmobiliariaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminInmobiliariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
