const objectRepository = {
  "default": {
    "label__exact_true_": (page) => page.getByLabel("Search", { exact: true }),
    "link_what_is_automation_ibm_https": (page) => page.getByRole("link", { name: "What is automation? IBM https" }),
    "Artificialintelligence": (page) => page.locator("dds-masthead-l1").getByRole("link", { name: "Artificial intelligence" }),
    "button_close_icon": (page) => page.getByRole("button", { name: "close icon" }),
    "link__exact_true": (page) => page.getByRole("link", { name: "Tutorials", exact: true }),
    "hidedividerline.bxcontentlayout.bxcontentlayout__body.bxcontentlayout__copy": (page) => page.locator(".hide-divider-line > .bx--content-layout > .bx--content-layout__body > .bx--content-layout__copy"),
    "text_view_all_python_tutorials": (page) => page.getByText("View all Python tutorials"),
    "search_search_ibm_developer": (page) => page.getByRole("search", { name: "Search IBM Developer" }).locator("div"),
    "placeholder_search_ibm_developer": (page) => page.getByPlaceholder("Search IBM Developer"),
    "label_open_and_close_list_of_options": (page) => page.getByLabel("Open and close list of options"),
    "menuitem_sign_in": (page) => page.getByRole("menuitem", { name: "Sign In" }),
    "html": (page) => page.locator("html"),
    "span": (page) => page.locator("span").getByRole("link").nth("2"),
  },
};
module.exports = objectRepository;