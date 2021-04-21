import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelModePage } from './travel-mode.page';

describe('TravelModePage', () => {
  let component: TravelModePage;
  let fixture: ComponentFixture<TravelModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelModePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
