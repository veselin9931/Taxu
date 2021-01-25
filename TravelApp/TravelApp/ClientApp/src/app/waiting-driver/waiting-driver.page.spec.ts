import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WaitingDriverPage } from './waiting-driver.page';

describe('WaitingDriverPage', () => {
  let component: WaitingDriverPage;
  let fixture: ComponentFixture<WaitingDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingDriverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WaitingDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
