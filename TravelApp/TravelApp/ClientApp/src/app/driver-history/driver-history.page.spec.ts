import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverHistoryPage } from './driver-history.page';

describe('DriverHistoryPage', () => {
  let component: DriverHistoryPage;
  let fixture: ComponentFixture<DriverHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
