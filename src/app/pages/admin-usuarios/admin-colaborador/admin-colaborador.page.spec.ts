import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminColaboradorPage } from './admin-colaborador.page';

describe('AdminColaboradorPage', () => {
  let component: AdminColaboradorPage;
  let fixture: ComponentFixture<AdminColaboradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminColaboradorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminColaboradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
