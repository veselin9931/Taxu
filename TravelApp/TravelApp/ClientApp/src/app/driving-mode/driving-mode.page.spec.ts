import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrivingModePage } from './driving-mode.page';

describe('DrivingModePage', () => {
  let component: DrivingModePage;
  let fixture: ComponentFixture<DrivingModePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivingModePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrivingModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
