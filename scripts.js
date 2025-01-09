function openTab(evt, tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const clickedTab = document.getElementById(tabName);
    clickedTab.classList.add('active');
}
