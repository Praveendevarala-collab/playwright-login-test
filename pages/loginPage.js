class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = 'input[name="username"]';
    this.password = 'input[type="password"]';
    this.proceedBtn = 'button:has-text("Proceed")';
  }

  async goto() {
    await this.page.goto('https://demohri.sutihr.com');
  }

  async login(user, pass) {
  // Clear username field properly
  await this.page.locator(this.username).click({ clickCount: 3 });
  await this.page.keyboard.press('Backspace');
  await this.page.fill(this.username, user);

  // Clear password field properly
  await this.page.locator(this.password).click({ clickCount: 3 });
  await this.page.keyboard.press('Backspace');
  await this.page.fill(this.password, pass);

  // Click proceed
  await this.page.click(this.proceedBtn);
}
  }
module.exports = LoginPage;