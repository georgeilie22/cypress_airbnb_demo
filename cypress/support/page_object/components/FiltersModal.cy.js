let entirePlaceCheckbox = 'input[name="Entire place"]';
let privateRoomCheckbox = 'input[name="Private room"]';
let japaneseHostCheckbox = 'input[name="Japanese"]';
let showButton =
  'div[data-section-id="COMPOSITE_FILTER_FOOTER_ALL_FILTERS:TAB_ALL_HOMES"] a';
let nrOfResultsHeader = "h1 > span";

class FiltersModal {
  checkEntirePlaceOption() {
    cy.get(entirePlaceCheckbox).click();
  }

  checkPrivateRoom() {
    cy.get(privateRoomCheckbox).click();
  }

  checkJapaneseHost() {
    cy.contains("h2", "Host language", { timeout: 20000 })
      .scrollIntoView()
      .then(() => {
        cy.get(japaneseHostCheckbox).click();
        cy.wait(5000);
      });
  }

  verifyIfFilterdNrOfResultsIsUpdated() {
    cy.get(showButton).then(($element) => {
      const text = $element.text().replace("Show ", "");
      clickOnShowResults();
      cy.get(nrOfResultsHeader).contains(text);
    });
  }

  clickOnShowResults() {
    cy.get(showButton).click();
  }
}

export default FiltersModal;
