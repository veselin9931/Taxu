import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BecomeDriverPage } from './become-driver.page';

describe('BecomeDriverPage', () => {
  let component: BecomeDriverPage;
  let fixture: ComponentFixture<BecomeDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeDriverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BecomeDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
