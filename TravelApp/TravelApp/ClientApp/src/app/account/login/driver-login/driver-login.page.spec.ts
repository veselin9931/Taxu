import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverLoginPage } from './driver-login.page';

describe('DriverLoginPage', () => {
  let component: DriverLoginPage;
  let fixture: ComponentFixture<DriverLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
