import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravellingPage } from './travelling.page';

describe('TravellingPage', () => {
  let component: TravellingPage;
  let fixture: ComponentFixture<TravellingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravellingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravellingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
