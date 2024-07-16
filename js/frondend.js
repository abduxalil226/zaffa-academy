function toggleNav() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('zaffa_active');
}

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabId = tab.getAttribute('data-tab');
            tabContents.forEach(content => {
                if (content.id === tabId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = header.parentElement;
            accordionItem.classList.toggle('active');
        });
    });
});
