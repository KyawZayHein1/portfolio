function openTab(evt, tabName) {
  var i, tabContent, tabButtons;

  // Hide all tab content
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
  }

  // Remove the active class from all tab buttons
  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
      tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  }

  // Show the current tab content and add an active class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openSubTab(evt, subTabName) {
  var i, subTabContent, subTabButtons;

  // Hide all sub-tab content
  subTabContent = document.getElementsByClassName("sub-tab-content");
  for (i = 0; i < subTabContent.length; i++) {
      subTabContent[i].style.display = "none";
  }

  // Remove the active class from all sub-tab buttons
  subTabButtons = document.getElementsByClassName("sub-tab-button");
  for (i = 0; i < subTabButtons.length; i++) {
      subTabButtons[i].className = subTabButtons[i].className.replace(" active", "");
  }

  // Show the current sub-tab content and add an active class to the button that opened the sub-tab
  document.getElementById(subTabName).style.display = "block";
  evt.currentTarget.className += " active";
}