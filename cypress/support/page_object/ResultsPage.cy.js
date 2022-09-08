import FiltersModal from "./components/FiltersModal.cy";

let cardContainer = 'div[aria-labelledby*="title"] ';
let pricePill = 'button[data-veloute="map/markers/BasePillMarker"]';
let cardTitles = 'div[id*="title"]';
let cardPrices = "span._tyxjp1";
let cardRatings = "span.t5eq1io.r4a59j5";
let pillCardRating = "span.ru0q88m.dir.dir-ltr";
let filtersHeaderContainer =
  'div[data-section-id="EXPLORE_STRUCTURED_PAGE_TITLE"]';
let filtersButton =
  'div[data-section-id="EXPLORE_STRUCTURED_PAGE_TITLE"] button';

class ResultsPage {
  constructor() {
    this.filtersModal = new FiltersModal();
  }

  hoverOverCardWithIndex(index) {
    cy.get(cardContainer).eq(index).trigger("mouseover");
  }

  isPriceHighlightedForCardWithIndex(index) {
    cy.get(pricePill).eq(index).contains("selected");
  }

  clickOnPricePillByIndex(index) {
    cy.get(pricePill, { timeout: 10000 }).eq(index).click();
  }

  verifyIfCardsNamesMatch(index) {
    cy.get(cardPrices)
      .eq(index)
      .then(($element) => {
        const price = $element.text();
        cy.get(cardPrices)
          .eq($element.length - 1)
          .should("have.text", price);
      });
  }

  verifyIfCardsPricesMatch(index) {
    cy.get(cardTitles)
      .eq(index)
      .then(($element) => {
        const title = $element.text();
        cy.get(cardTitles)
          .eq($element.length - 1)
          .should("have.text", title);
      });
  }

  verifyIfCardsRatingsMatch(index) {
    cy.get(cardRatings)
      .eq(index)
      .then(($element) => {
        const rating = $element.text();
        cy.get(pillCardRating).eq(0).should("have.text", rating);
      });
  }

  clickOnFiltersButton() {
    cy.get(filtersButton).click();
  }

  isTheNrOfSelectedFiltersCorrect(nr) {
    cy.get(filtersHeaderContainer).contains(nr);
  }
}

export default ResultsPage;
