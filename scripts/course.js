// course.js

// Array of course objects
const courses = [
    { name: "Programming with Functions", credits: 2, completed: true },
    { name: "Programming with Classes", credits: 2, completed: true },
    { name: "Introduction to Programming", credits: 2, completed: true },
    { name: "Web Fundamentals", credits: 2, completed: true },
    { name: "Dynamic Web Fundamentals", credits: 2, completed: true },
    { name: "Web Frontend Development", credits: 2, completed: false }
];

// Function to display courses
function displayCourses(filter = null) {
    const courseListDiv = document.getElementById('courseList');
    courseListDiv.innerHTML = ''; // Clear previous content
    let totalCredits = 0;

    courses.forEach(course => {
        // Apply filter if provided
        if (filter === 'completed' && !course.completed) return;
        if (filter === 'not-completed' && course.completed) return;

        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');

        // Mark completed courses differently
        if (course.completed) {
            courseDiv.innerHTML = `<strong>${course.name}</strong> - ${course.credits} credits (Completed)`;
        } else {
            courseDiv.innerHTML = `${course.name} - ${course.credits} credits (Not Completed)`;
        }

        courseListDiv.appendChild(courseDiv);
        totalCredits += course.credits; // Add credits to total
    });

    // Display total credits
    document.getElementById('totalCredits').textContent = totalCredits;
}

// Function to filter courses
function filterCourses(filter) {
    displayCourses(filter);
}

// Call the function to display courses when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayCourses(); // Display all courses initially

    // Add event listeners for filter buttons
    document.getElementById('showAll').addEventListener('click', () => displayCourses());
    document.getElementById('showCompleted').addEventListener('click', () => filterCourses('completed'));
    document.getElementById('showNotCompleted').addEventListener('click', () => filterCourses('not-completed'));
});