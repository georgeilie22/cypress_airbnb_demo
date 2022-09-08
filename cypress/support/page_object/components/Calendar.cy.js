let calendarContainer =
  'div[data-testid="structured-search-input-field-dates-panel"]';
let checkinDate = 'td[aria-label*="Selected check-in date."] > div';
let checkoutDate = 'td[aria-label*="Selected checkout date."] > div';
let chooseDatesButton = "#tab--tabs--0";
let imFlexibleButton = "#tab--tabs--1";
let weekendButton = "#flexible_trip_lengths-weekend_trip";

class Calendar {
  selectDate(date) {
    let dateLocator =
      calendarContainer + ' div[data-testid= "calendar-day-' + date + '"]';
    cy.get(dateLocator).click({ force: true });
  }

  isDateDisabled(date) {
    let dateLocator =
      calendarContainer + ' div[data-testid= "calendar-day-' + date + '"]';
    cy.get(dateLocator)
      .invoke("attr", "data-is-day-blocked")
      .should("eq", "true");
  }

  isDateIntervalSelected(checkIn, checkOut) {
    cy.get(checkinDate).should("have.text", checkIn);
    cy.get(checkoutDate).should("have.text", checkOut);
  }

  clickOnImFlexiBleButton() {
    cy.get(imFlexibleButton).click({ force: true });
  }

  clickOnWeekendButton() {
    cy.get(weekendButton).click({ force: true });
  }

  clickOnChooseDatesButton() {
    cy.get(chooseDatesButton).click({ force: true });
  }
}

export default Calendar;
