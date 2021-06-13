import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PaymentsPage } from './payments.page';
describe('PaymentsPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PaymentsPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PaymentsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=payments.page.spec.js.map