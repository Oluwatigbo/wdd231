 // JavaScript to handle dynamic content and functionality
        document.addEventListener('DOMContentLoaded', () => {
            // Set the current year in the footer
            document.getElementById('currentYear').textContent = new Date().getFullYear();
            // Set the last modified date
            document.getElementById('lastModified').textContent = document.lastModified;

            // Set the current timestamp in the hidden field
            document.getElementById('timestamp').value = new Date().toISOString();

            // Modal functionality
            const infoButtons = document.querySelectorAll('.info-btn');
            const modals = document.querySelectorAll('.modal');
            const closeButtons = document.querySelectorAll('.close');

            infoButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const modalId = button.getAttribute('data-modal');
                    document.getElementById(modalId).style.display = 'block';
                });
            });

            closeButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const modalId = button.getAttribute('data-modal');
                    document.getElementById(modalId).style.display = 'none';
                });
            });

            // Close modal when clicking outside of the modal content
            window.addEventListener('click', (event) => {
                modals.forEach(modal => {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                    }
                });
            });
        });
