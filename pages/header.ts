import { expect, Locator, Page } from "@playwright/test";
export class Header {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async checkSportOrder() {
    const sportDisplayName = "//div[contains(@class,'expandable-tabs')]/a[";
    let sportNames: Array<String> = [];
    let i = 1;

    //gets the displayed names of the 8 sports that are displayed in the list at the top of the site [not including thouse that can only be seen by expanding the list]
    for (i = 1; i < 8; i++) {
      let val = await this.page
        .locator("xpath=" + sportDisplayName + i + "]/button/div")
        .textContent();
      if (val == null) {
        sportNames.push("null");
      } else {
        sportNames.push(val);
      }
    }
    const base = [
      "Football",
      "Basketball",
      "Tennis",
      "Baseball",
      "Rugby",
      "A. Football",
      "Hockey",
    ];
    //compares the ;ist of displayed sports to the expected list
    await expect(JSON.stringify(sportNames)).toStrictEqual(
      JSON.stringify(base)
    );
  }
}
