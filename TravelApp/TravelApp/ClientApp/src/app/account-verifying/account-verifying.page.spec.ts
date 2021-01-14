import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountVerifyingPage } from './account-verifying.page';

describe('AccountVerifyingPage', () => {
  let component: AccountVerifyingPage;
  let fixture: ComponentFixture<AccountVerifyingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountVerifyingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountVerifyingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
