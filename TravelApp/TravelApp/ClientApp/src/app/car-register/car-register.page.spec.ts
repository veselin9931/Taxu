import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarRegisterPage } from './car-register.page';

describe('CarRegisterPage', () => {
  let component: CarRegisterPage;
  let fixture: ComponentFixture<CarRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
