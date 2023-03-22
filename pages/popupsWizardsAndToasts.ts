import { expect, Locator, Page } from "@playwright/test";
export class PopupsWizardsAndToasts {
  readonly page: Page;
  readonly cookiesWizard: Locator;
  readonly faveLeaguePopup: Locator;
  constructor(page: Page) {
    this.page = page;
    this.cookiesWizard = page.locator(
      "xpath=//div[contains(@class, 'popup')]//button[contains(@id, 'agree')]"
    );
    this.faveLeaguePopup = page.locator(
      "css=div[class*='wizard-widget'] > button"
    );
  }
  //Closes the "Accept cookies" wizard
  async closeCookiesWizard() {
    await this.cookiesWizard.click();
  }
  async closeFaveLeaguePopup() {
    try {
      await this.faveLeaguePopup.click({ timeout: 15000 });
    } catch (e) {}
  }
}
