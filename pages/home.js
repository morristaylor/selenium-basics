const By = require("selenium-webdriver").By;

class HomePage {
  constructor(driver) {
    this.driver = driver;
    this.locators = {
      inviteeForm: By.id("registrar"),
      inviteeNameField: By.css("#registrar input[name='name']"),
      toggleNonReponsdersVisibility: By.css(".main > div input"),
      removeButtonForInvitee: invitee => By.xpath(`//span[text()='${invitee}']/../button[2]`)
    };
  }

  open() {
    this.driver.get(process.env.URL);
  }

  addInvitee(name) {
    this.driver.findElement(this.locators.inviteeNameField)
      .sendKeys(name);
    this.driver.findElement(this.locators.inviteeForm).submit();
  }

  toggleNonReponsdersVisibility() {
    this.driver.findElement(this.locators.toggleNonReponsdersVisibility)
      .click();
  }

  removeInvitee(invitee) {
    this.driver.findElement(this.locators.removeButtonForInvitee(invitee))
      .click();
  }
}

module.exports = HomePage;
