// Smooth scroll to form
function scrollToForm() {
    document.getElementById('register').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Create WhatsApp message
    const message = `New Website Tester Registration\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/3550688155866?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Show success message
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
    document.getElementById('contact-info').textContent = phone;
    
    // Store submission (in memory for this session)
    console.log('Registration submitted:', { name, email, phone });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});
