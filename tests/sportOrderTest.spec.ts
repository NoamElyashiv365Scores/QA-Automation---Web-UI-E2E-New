import { test, expect } from "@playwright/test";
import { PopupsWizardsAndToasts } from "../pages/popupsWizardsAndToasts";
import { Header } from "../pages/header";
test("sportOrderTest", async ({ page }) => {
  const popupsWizardsAndToasts = new PopupsWizardsAndToasts(page);
  //goes to the English (UK) version of the site
  await page.goto("https://365scores.com/en-uk/?ipParam=103.204.124.0");
  await test.step(`Closes the "Accept cookies" wizard`, async () => {
    await popupsWizardsAndToasts.closeCookiesWizard();
  });

  await test.step(`Closes the Favorite league popup`, async () => {
    await popupsWizardsAndToasts.closeFaveLeaguePopup();
  });

  const header = new Header(page);
  await test.step(`Checks the visable sports in the header`, async () => {
    await header.checkSportOrder();
  });
});
