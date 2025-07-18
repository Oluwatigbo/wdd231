// script.js

async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

function displayMembers(members) {
    const memberList = document.getElementById('memberList');
    memberList.innerHTML = ''; // Clear previous content

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');
        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}" />
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>${member.info}</p>
        `;
        memberList.appendChild(card);

        
    });
}

document.getElementById('gridView').addEventListener('click', () => {
    document.getElementById('memberList').style.display = 'grid';
});

document.getElementById('listView').addEventListener('click', () => {
    document.getElementById('memberList').style.display = 'block';
});

document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
    document.getElementById('lastModified').textContent = document.lastModified;
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

// script.js

// Fetch weather data
async function fetchWeather() {
    const apiKey = '89091498b24f73d7dfebcbef76e8d0c0';
    const city = 'ibadan'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherData = document.getElementById('weatherData');
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    weatherData.innerHTML = `
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${description}</p>
    `;
}

// Fetch spotlight members
async function fetchSpotlights() {
    try {
        const response = await fetch('data/members.json');
        const members = await response.json();
        const goldSilverMembers = members.filter(member => member.membershipLevel === 1 || member.membershipLevel === 2);
        const randomSpotlights = getRandomMembers(goldSilverMembers, 3);
        displaySpotlights(randomSpotlights);
    } catch (error) {
        console.error('Error fetching spotlight members:', error);
    }
}

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displaySpotlights(spotlights) {
    const spotlightList = document.getElementById('spotlightList');
    spotlightList.innerHTML = ''; // Clear previous content

    spotlights.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');
        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="${member.image}" alt="${member.name} logo" />
            <p>Phone: ${member.phone}</p>
            <p>Address: ${member.address}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membershipLevel === 1 ? 'Gold' : 'Silver'}</p>
        `;
        spotlightList.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather();
    fetchSpotlights();
    document.getElementById('lastModified').textContent = document.lastModified; // Display last modified date
    document.getElementById('currentYear').textContent = new Date().getFullYear(); // Display current year
});
