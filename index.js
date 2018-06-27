const selenium = require("selenium-webdriver");
const By = selenium.By;

const driver = new selenium.Builder()
  .forBrowser("chrome")
  .build();

driver.get(process.env.URL);

const locators = {
  inviteeForm: By.id("registrar"),
  inviteeNameField: By.css("#registrar input[name='name']"),
  toggleNonReponsdersVisibility: By.css(".main > div input")
};

function addInvitee(name) {
  driver.findElement(locators.inviteeNameField)
    .sendKeys(name);
  driver.findElement(locators.inviteeForm).submit();
}

function toggleNonReponsdersVisibility() {
  driver.findElement(locators.toggleNonReponsdersVisibility)
    .click();
}

addInvitee("Muhamed Hassan");
addInvitee("Steve Harvey");

toggleNonReponsdersVisibility();
