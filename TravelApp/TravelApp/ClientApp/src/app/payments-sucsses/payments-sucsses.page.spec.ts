import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentsSucssesPage } from './payments-sucsses.page';

describe('PaymentsSucssesPage', () => {
  let component: PaymentsSucssesPage;
  let fixture: ComponentFixture<PaymentsSucssesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsSucssesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentsSucssesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
