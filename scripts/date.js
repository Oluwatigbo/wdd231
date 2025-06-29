// date.js

document.addEventListener('DOMContentLoaded', () => {
    // Display the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Display the last modified date
    document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
});
