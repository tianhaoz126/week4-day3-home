document.addEventListener('DOMContentLoaded', function() { 
    const emailRadio = document.getElementById('contactByEmail');
    const phoneRadio = document.getElementById('contactByPhone');
    const emailSection = document.getElementById('emailSection');
    const phoneSection = document.getElementById('phoneSection');

  
    emailRadio.addEventListener('change', function() {
        if(emailRadio.checked) {
            emailSection.style.display = 'block';
            phoneSection.style.display = 'none';
        }
    });

  
    phoneRadio.addEventListener('change', function() {
        if(phoneRadio.checked) {
            phoneSection.style.display = 'block';
            emailSection.style.display = 'none';
        }
    });
});
