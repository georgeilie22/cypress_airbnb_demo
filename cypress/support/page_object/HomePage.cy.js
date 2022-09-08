import Calendar from "./components/Calendar.cy";

let searchContainer = 'div[data-testid="little-search"]';
let searchDestinationField = "#bigsearch-query-location-input";
let destinationsDropdownOptions =
  '#bigsearch-query-location-listbox div[role="option"]';
let searchButton =
  'button[data-testid="structured-search-input-search-button"]';

class HomePage {
  constructor() {
    this.calendar = new Calendar();
  }

  clickOnAnywhereButton() {
    cy.get(searchContainer).contains("Anywhere").click();
  }

  searchDestination(destination) {
    cy.get(searchDestinationField).type(destination);
  }

  selectDestination(destination) {
    cy.contains(destinationsDropdownOptions, destination).click({
      force: true,
    });
  }

  clickOnSearchbutton() {
    cy.get(searchButton).click();
  }
}

export default HomePage;
