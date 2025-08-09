async function fetchGardenEvents() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayEvents(data.events);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayEvents(events) {
    const eventsContainer = document.getElementById('garden-events');
    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Description: ${event.description}</p>
        `;
        eventsContainer.appendChild(eventElement);
    });
}

document.addEventListener('DOMContentLoaded', fetchGardenEvents);
