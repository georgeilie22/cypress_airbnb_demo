import HomePage from "../support/page_object/HomePage.cy";
import ResultsPage from "../support/page_object/ResultsPage.cy";
import {
  getCurrentDate,
  formatDayToString,
} from "../support/utils/DatesUtils.js";

context("Interview Tests", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit({
      url: "https://www.airbnb.com/",
      auth: {
        username: "test_interview2200@gmail.com",
        password: "Pass1991",
      },
    });
    cy.wait(5000);
  });

  it("Verify that the results match the selected criteria", () => {
    let destination = "Spain";
    let currentDate = getCurrentDate();
    let currentDay = currentDate.charAt(3) + currentDate.charAt(4);
    let endDay = formatDayToString(parseInt(currentDay) + 4);
    let endDate = currentDate.replace(currentDay, endDay);
    let blockedDate = currentDate.replace(
      currentDay,
      formatDayToString(parseInt(currentDay) - 1)
    );

    let homePage = new HomePage();

    homePage.clickOnAnywhereButton();
    homePage.searchDestination(destination);
    homePage.selectDestination(destination);
    homePage.calendar.selectDate(currentDate);
    homePage.calendar.selectDate(endDate);
    homePage.calendar.isDateDisabled(blockedDate);
    homePage.calendar.isDateIntervalSelected(
      parseInt(currentDay),
      parseInt(endDay)
    );
  });

  it("Verify that the results match the search criteria", () => {
    let destination = "Spain";
    let cardUnderTestIndex = 0;

    let homePage = new HomePage();
    let resultsPage = new ResultsPage();

    homePage.clickOnAnywhereButton();
    homePage.searchDestination(destination);
    homePage.selectDestination(destination);
    homePage.calendar.clickOnImFlexiBleButton();
    homePage.calendar.clickOnWeekendButton();
    homePage.calendar.clickOnChooseDatesButton();
    homePage.clickOnSearchbutton();
    resultsPage.hoverOverCardWithIndex(cardUnderTestIndex);
    resultsPage.isPriceHighlightedForCardWithIndex(cardUnderTestIndex);
  });

  it("Verify that the property displayed on the map matches some characteristics", () => {
    let destination = "Spain";
    let cardUnderTestIndex = 0;

    let homePage = new HomePage();
    let resultsPage = new ResultsPage();

    homePage.clickOnAnywhereButton();
    homePage.searchDestination(destination);
    homePage.selectDestination(destination);
    homePage.calendar.clickOnImFlexiBleButton();
    homePage.calendar.clickOnWeekendButton();
    homePage.calendar.clickOnChooseDatesButton();
    homePage.clickOnSearchbutton();
    resultsPage.clickOnPricePillByIndex(cardUnderTestIndex);
    resultsPage.verifyIfCardsNamesMatch(cardUnderTestIndex);
    resultsPage.verifyIfCardsRatingsMatch(cardUnderTestIndex);
  });

  it("Verify that the selected filters number is reflected on the listing and the results are matching the filtered criteria", () => {
    cy.viewport(1920, 1080);
    cy.visit({
      url: "https://www.airbnb.com/",
      auth: {
        username: "firstboygaminghd@gmail.com",
        password: "cacatpansat123",
      },
    });
    cy.wait(5000);

    let destination = "Spain";
    let cardUnderTestIndex = 0;

    let homePage = new HomePage();
    let resultsPage = new ResultsPage();

    homePage.clickOnAnywhereButton();
    homePage.searchDestination(destination);
    homePage.selectDestination(destination);
    homePage.calendar.clickOnImFlexiBleButton();
    homePage.calendar.clickOnWeekendButton();
    homePage.calendar.clickOnChooseDatesButton();
    homePage.clickOnSearchbutton();
    resultsPage.clickOnFiltersButton();
    resultsPage.filtersModal.checkEntirePlaceOption();
    resultsPage.filtersModal.checkPrivateRoom();
    resultsPage.filtersModal.checkJapaneseHost();
    resultsPage.filtersModal.clickOnShowResults();
    resultsPage.isTheNrOfSelectedFiltersCorrect(3);
  });
});
