import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WalletChargePage } from './wallet-charge.page';

describe('WalletChargePage', () => {
  let component: WalletChargePage;
  let fixture: ComponentFixture<WalletChargePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletChargePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WalletChargePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
