import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminBoletaPage } from './admin-boleta.page';

describe('AdminBoletaPage', () => {
  let component: AdminBoletaPage;
  let fixture: ComponentFixture<AdminBoletaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBoletaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminBoletaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
