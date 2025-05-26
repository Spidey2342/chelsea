// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

// Tab functionality for Effects page
function openTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Deactivate all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Activate selected tab
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Interactive Map Popup
function showPopup(region) {
    const popup = document.getElementById('map-popup');
    const popupContent = document.getElementById('popup-content');
    
    let content = '';
    switch(region) {
        case 'north':
            content = `<h3>Northern Region: Drought</h3>
                      <p>The Northern Region is experiencing increased drought frequency and intensity, with rainfall decreasing by 20% in some areas. This is affecting agricultural productivity and water availability.</p>
                      <img src="images/northern-drought.jpg" alt="Northern Region Drought" style="width:100%; margin-top:1rem;">`;
            break;
        case 'accra':
            content = `<h3>Accra Coast: Flooding</h3>
                      <p>Accra's coastline is experiencing increased flooding due to sea level rise and more intense storms. Coastal erosion is destroying property and infrastructure.</p>
                      <img src="images/accra-flooding.jpg" alt="Accra Flooding" style="width:100%; margin-top:1rem;">`;
            break;
        case 'volta':
            content = `<h3>Volta Lake: Water Levels</h3>
                      <p>Fluctuating water levels in Lake Volta due to changing rainfall patterns are affecting hydropower generation and fishing communities.</p>
                      <img src="images/volta-lake-levels.jpg" alt="Volta Lake" style="width:100%; margin-top:1rem;">`;
            break;
        case 'cocoa':
            content = `<h3>Cocoa Belt: Crop Yields</h3>
                      <p>Ghana's cocoa-growing regions are experiencing reduced yields due to higher temperatures and changing rainfall patterns, threatening the country's main export.</p>
                      <img src="images/cocoa-farm.jpg" alt="Cocoa Farm" style="width:100%; margin-top:1rem;">`;
            break;
    }
    
    popupContent.innerHTML = content;
    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('map-popup').style.display = 'none';
}

// Close popup when clicking outside
window.addEventListener('click', function(event) {
    const popup = document.getElementById('map-popup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        this.classList.toggle('active');
        const answer = this.nextElementSibling;
        if (this.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    });
});

// Form Submissions
document.getElementById('newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});

document.getElementById('climate-pledge')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for making your climate pledge! Together we can make a difference.');
    this.reset();
});

document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});

// Chart for Causes Page
if (document.getElementById('emissionsChart')) {
    const ctx = document.getElementById('emissionsChart').getContext('2d');
    const emissionsChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Agriculture', 'Energy', 'Land Use Change', 'Waste', 'Industrial Processes', 'Transport'],
            datasets: [{
                data: [45, 25, 15, 8, 5, 2],
                backgroundColor: [
                    '#006b3f',
                    '#fcd116',
                    '#ce1126',
                    '#8a2be2',
                    '#ff7f50',
                    '#20b2aa'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right',
                },
                title: {
                    display: true,
                    text: 'Ghana\'s Greenhouse Gas Emissions by Sector (2021)',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
}