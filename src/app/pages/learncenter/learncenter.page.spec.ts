import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LearncenterPage } from './learncenter.page';

describe('LearncenterPage', () => {
  let component: LearncenterPage;
  let fixture: ComponentFixture<LearncenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearncenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LearncenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
