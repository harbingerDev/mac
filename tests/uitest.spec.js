import { test, expect, request } from "@playwright/test";
const objectRepository = require("../objectRepository")
const dataRepository = require("../dataRepository.json")
require("dotenv").config()

test("test @smoke", async ({ page, context }) => {
  await page.goto("https://www.google.com/");
  await objectRepository.default.label__exact_true_(page).click();
  await objectRepository.default.label__exact_true_(page).fill(dataRepository[process.env.EXECUTION_ENVIRONMENT].data_431188);
  await objectRepository.default.link_what_is_automation_ibm_https(page).click();
  await objectRepository.default.Artificialintelligence(page).click();
  await objectRepository.default.button_close_icon(page).click();
  await objectRepository.default.link__exact_true(page).click();
  await objectRepository.default.hidedividerline.bxcontentlayout.bxcontentlayout__body.bxcontentlayout__copy(page).click();
  await objectRepository.default.text_view_all_python_tutorials(page).click();
  await objectRepository.default.search_search_ibm_developer(page).click();
  await objectRepository.default.placeholder_search_ibm_developer(page).click();
  await objectRepository.default.placeholder_search_ibm_developer(page).fill(dataRepository[process.env.EXECUTION_ENVIRONMENT].data_136740);
  await objectRepository.default.placeholder_search_ibm_developer(page).press("Enter");
  await objectRepository.default.label_open_and_close_list_of_options(page).click();
  await objectRepository.default.label_open_and_close_list_of_options(page).click();
  await objectRepository.default.menuitem_sign_in(page).click();
  await objectRepository.default.html(page).click();
  await page.locator("span").getByRole("link").nth(2).click();
});
