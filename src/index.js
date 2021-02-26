// toggles close button
const toggleClose = () => {
  let close = document.getElementById("initial-view");
  if (close.style.display === "none") {
    close.style.display = "block";
  } else {
    close.style.display = "none";
  }
};

// toggles between views
const plusHandler = () => {
  toggleClose();
  toggleDetails();
};

// toggles more details button
const toggleDetails = () => {
  let moreDetails = document.getElementById("more-details");
  if (moreDetails.style.display === "block") {
    moreDetails.style.display = "none";
  } else {
    moreDetails.style.display = "block";
  }
};
