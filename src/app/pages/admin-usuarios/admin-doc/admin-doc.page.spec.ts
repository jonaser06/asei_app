import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminDocPage } from './admin-doc.page';

describe('AdminDocPage', () => {
  let component: AdminDocPage;
  let fixture: ComponentFixture<AdminDocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDocPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
