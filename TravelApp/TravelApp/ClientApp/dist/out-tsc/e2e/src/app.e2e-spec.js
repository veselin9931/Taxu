import { AppPage } from './app.po';
describe('new App', () => {
    let page;
    beforeEach(() => {
        page = new AppPage();
    });
    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getPageTitle()).toContain('Tab 1');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map