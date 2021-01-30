import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverProfilePage } from './driver-profile.page';

describe('DriverProfilePage', () => {
  let component: DriverProfilePage;
  let fixture: ComponentFixture<DriverProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
