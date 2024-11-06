// Get the current page file name
const currentPage = window.location.pathname.split('/').pop();

// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');
const navBrand = document.querySelectorAll('.navbar-brand')

// Loop through each link and add 'active' class to the matching one
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
navBrand.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});


// Define the mapping of keywords to HTML file paths
const keywordMapping = {
    "data states": "data_states.html",
    "states of data": "data_states.html#information",
    "data at rest": "data_states.html#information",
    "data in transit": "data_states.html#information",
    "data in use": "data_states.html#information",
    "authentication types": "authentication_types.html",
    "multifactor authentication": "authentication_types.html#information",
    "authentication": "authentication_types.html",
    "cia triad": "cia_triad.html",
    "cia": "cia_triad.html#information",
    "confidentiality": "cia_triad.html#info-confidentiality",
    "integrity": "cia_triad.html#info-integrity",
    "accessibility": "cia_triad.html#info-accessibility",
    "passwords": "passwords.html",
    "password attacks": "passwords.html#info-example",
    "phishing": "phishing.html",
    "recognize and report phishing": "phishing.html#info-example",
    "scam emails": "phishing.html#information",
    "potential threats": "threats.html",
    "threats": "threats.html",
    "data": "data_states.html#information",
  };

  function searchSite(event) {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput");
    const searchValue = searchInput.value.toLowerCase().trim();
  
    if (keywordMapping[searchValue]) {
        const targetUrl = keywordMapping[searchValue];
        console.log("Redirecting to:", targetUrl);
        
        // Add a slight delay to allow the page to load fully
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 100); // 100 milliseconds delay
        
        // Clear the input field
        searchInput.value = "";
        return true;
    } else {
        // Clear the input field
        searchInput.value = "";
        alert("No results found for your search. Try a different keyword.");
        return false;
    }
}

document.getElementById("year").textContent = new Date().getFullYear();
  