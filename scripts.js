function openTab(event, tabName) {
    // Hide all tab content
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Remove active class from all tab links
    var tabLinks = document.getElementsByClassName('tab-link');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }

    // Show the current tab and add an active class to the button that opened the tab
    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += ' active';
}

// Open the default tab (Customers) on page load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tab-link').click();
});
