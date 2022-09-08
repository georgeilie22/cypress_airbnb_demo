export function getCurrentDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  return mm + "/" + dd + "/" + yyyy;
}

export function formatDayToString(dayNr) {
  let day = dayNr.toString();
  if (day < 10) {
    day = "0" + day;
  }
  return day;
}
