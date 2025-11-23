document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Stop the form from navigating the page

    // Zoho's specific submission URL
    const formUrl = 'https://forms.zohopublic.com/retrotogglegm1/form/ContactRetroToggle/formperma/whrZ1z1ynnVVTJM7SSmrnPzbfFMVDu_m2yt3HGB1kUk/htmlRecords/submit';

    const formData = new FormData(this);

    // Send the data in the background
    fetch(formUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Needed for cross-origin submission
    })
        .then(response => {
            // Form submitted. Show success message directly on your page.
            alert('✅ Message sent successfully! Thank you.');
            this.reset(); // Clear the form fields
        })
        .catch(error => {
            alert('❌ There was an error. Please try again.');
        });
});