import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassengerReportPage } from './passenger-report.page';

describe('PassengerReportPage', () => {
  let component: PassengerReportPage;
  let fixture: ComponentFixture<PassengerReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassengerReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
