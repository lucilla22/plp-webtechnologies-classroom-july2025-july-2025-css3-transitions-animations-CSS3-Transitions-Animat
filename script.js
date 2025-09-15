// --- Part 2: JavaScript Functions ---

/**
 * Calculates a new value based on two parameters.
 * Demonstrates local scope for the 'localValue' variable.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers plus a local value.
 */
function calculateSum(a, b) {
    // This variable has local scope, only accessible within this function.
    const localValue = 10;
    return a + b + localValue;
}

// Global variable accessible throughout the script.
let globalResult = 0;

// Event listener for the "Calculate Value" button
document.getElementById('calculate-button').addEventListener('click', () => {
    // Reusing the function with different parameters
    globalResult = calculateSum(5, 7);
    const outputElement = document.getElementById('calculation-output');
    outputElement.textContent = `The calculated value is: ${globalResult}`;
    
    // Demonstrate a different calculation
    const anotherResult = calculateSum(20, 30);
    console.log(`Another calculation result: ${anotherResult}`); // 60
});

// --- Part 3: Combining CSS Animations with JavaScript ---

const animatedBox = document.getElementById('animated-box');
const animateButton = document.getElementById('animate-box-button');

/**
 * Triggers a CSS animation by toggling a class.
 * Reusable function to add or remove a CSS class.
 * @param {HTMLElement} element - The DOM element to animate.
 * @param {string} className - The CSS class to toggle.
 */
function toggleAnimationClass(element, className) {
    element.classList.toggle(className);
}

// Event listener to trigger the animation
animateButton.addEventListener('click', () => {
    // Use the reusable function to toggle the 'animate-slide' class
    toggleAnimationClass(animatedBox, 'animate-slide');
});

// Optional: Add a listener to remove the class after the transition ends
animatedBox.addEventListener('transitionend', () => {
    // This part ensures the animation can be re-triggered multiple times
    // by removing the class once the transition is complete.
    // toggleAnimationClass(animatedBox, 'animate-slide'); // Uncomment for a one-time toggle effect
});
