import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanguagePopoverPage } from './language-popover.page';

describe('LanguagePopoverPage', () => {
  let component: LanguagePopoverPage;
  let fixture: ComponentFixture<LanguagePopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagePopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagePopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
