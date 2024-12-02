/********* create variables *********/
// Variables for cost per day and the number of selected days
let dailyRate = 35; // Default rate for full day
let selectedDays = []; // Array to track selected days

// DOM elements
const dayButtons = document.querySelectorAll('.day-selector li');
const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const costDisplay = document.getElementById('calculated-cost');

/********* colour change days of week *********/
dayButtons.forEach((dayButton) => {
    dayButton.addEventListener('click', () => {

        if (!dayButton.classList.contains('clicked')) {
            dayButton.classList.add('clicked');
            selectedDays.push(dayButton.id); 
        } else {
            dayButton.classList.remove('clicked');
            selectedDays = selectedDays.filter((day) => day !== dayButton.id); 
        }

        calculateTotalCost();
    });
});

/********* clear days *********/
clearButton.addEventListener('click', () => {

    dayButtons.forEach((dayButton) => dayButton.classList.remove('clicked'));
    

    selectedDays = [];
    costDisplay.innerHTML = '0';
});

/********* change rate *********/

halfButton.addEventListener('click', () => {
    dailyRate = 20; 
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    calculateTotalCost();
});

// Full-day button functionality
fullButton.addEventListener('click', () => {
    dailyRate = 35; 
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked'); 
    calculateTotalCost();
});

/********* calculate *********/
function calculateTotalCost() {
    const totalCost = selectedDays.length * dailyRate; 
    costDisplay.innerHTML = totalCost; 
}
