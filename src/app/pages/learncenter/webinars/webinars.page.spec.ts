import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WebinarsPage } from './webinars.page';

describe('WebinarsPage', () => {
  let component: WebinarsPage;
  let fixture: ComponentFixture<WebinarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebinarsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WebinarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
