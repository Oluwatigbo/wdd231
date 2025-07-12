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
