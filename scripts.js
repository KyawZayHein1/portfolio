function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    const activeTab = document.getElementById(tabName);
    activeTab.classList.add('active');
  
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
      link.classList.remove('active');
    });
    const activeLink = document.querySelector(`nav ul li a[href='#${tabName}']`);
    activeLink.classList.add('active');
  }
  