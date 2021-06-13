import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutOfTownPage } from './out-of-town.page';

describe('OutOfTownPage', () => {
  let component: OutOfTownPage;
  let fixture: ComponentFixture<OutOfTownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutOfTownPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutOfTownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
