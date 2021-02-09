import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminModuloPage } from './admin-modulo.page';

describe('AdminModuloPage', () => {
  let component: AdminModuloPage;
  let fixture: ComponentFixture<AdminModuloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminModuloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminModuloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
