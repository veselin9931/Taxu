import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassengerLoginPage } from './passenger-login.page';

describe('PassengerLoginPage', () => {
  let component: PassengerLoginPage;
  let fixture: ComponentFixture<PassengerLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassengerLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
