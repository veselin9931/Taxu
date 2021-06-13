import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookedTravelsPage } from './booked-travels.page';

describe('BookedTravelsPage', () => {
  let component: BookedTravelsPage;
  let fixture: ComponentFixture<BookedTravelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedTravelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookedTravelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
