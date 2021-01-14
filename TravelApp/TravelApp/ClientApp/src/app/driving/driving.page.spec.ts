import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrivingPage } from './driving.page';

describe('DrivingPage', () => {
  let component: DrivingPage;
  let fixture: ComponentFixture<DrivingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrivingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
