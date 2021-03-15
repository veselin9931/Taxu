import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavouriteOrdersPage } from './favourite-orders.page';

describe('FavouriteOrdersPage', () => {
  let component: FavouriteOrdersPage;
  let fixture: ComponentFixture<FavouriteOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteOrdersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavouriteOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
