class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = 'input[name="username"]';
    this.password = 'input[type="password"]';
    this.proceedBtn = 'button:has-text("Proceed")';

    // ✅ Target ONLY Quick Link Personnel (inside widget section)
    this.personnelLink = 'div.circle-label2:has-text("Personnel")';
  }

  async goto() {
    await this.page.goto('https://demohri.sutihr.com');
  }

  async login(user, pass) {
    await this.page.locator(this.username).click({ clickCount: 3 });
    await this.page.keyboard.press('Backspace');
    await this.page.fill(this.username, user);

    await this.page.locator(this.password).click({ clickCount: 3 });
    await this.page.keyboard.press('Backspace');
    await this.page.fill(this.password, pass);

    await this.page.click(this.proceedBtn);
  }

  async clickPersonnel() {
    // Wait for dashboard to stabilize
    await this.page.waitForSelector(this.personnelLink);

    await this.page.locator(this.personnelLink).click();
  }
}

module.exports = LoginPage;