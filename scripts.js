// Function to open the selected tab
function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.querySelectorAll('.tab-content');
    tabcontent.forEach(tab => tab.classList.remove('active'));
    tabbuttons = document.querySelectorAll('.tab-button');
    tabbuttons.forEach(button => button.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Function to open sub-tabs under Experiences
function openSubTab(evt, subTabName) {
    var i, subTabContent, subTabButtons;
    subTabContent = document.querySelectorAll('.sub-tab-content');
    subTabContent.forEach(content => content.classList.remove('active'));
    subTabButtons = document.querySelectorAll('.sub-tab-button');
    subTabButtons.forEach(button => button.classList.remove('active'));
    document.getElementById(subTabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// Set default active tab
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tab-button')[0].click(); // Auto click the first tab
});
