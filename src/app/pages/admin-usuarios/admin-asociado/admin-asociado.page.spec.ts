import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminAsociadoPage } from './admin-asociado.page';

describe('AdminAsociadoPage', () => {
  let component: AdminAsociadoPage;
  let fixture: ComponentFixture<AdminAsociadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAsociadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminAsociadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
