import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverRegisterPage } from './driver-register.page';

describe('DriverRegisterPage', () => {
  let component: DriverRegisterPage;
  let fixture: ComponentFixture<DriverRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
