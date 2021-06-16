import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservationsPage } from './reservations.page';

describe('ReservationsPage', () => {
  let component: ReservationsPage;
  let fixture: ComponentFixture<ReservationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
