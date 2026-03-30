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
    await this.page.fill(this.username, 'qatest');
    await this.page.fill(this.password, 'test2020');
    await this.page.click(this.proceedBtn);
  }
}

module.exports = { LoginPage };