// Function to add a CSS class
function addClass() {
    const element = document.getElementById('myElement');
    element.classList.add('highlight');
}

// Function to remove a CSS class
function removeClass() {
    const element = document.getElementById('myElement');
    element.classList.remove('highlight');
}

// Function to toggle a CSS class
function toggleClass() {
    const element = document.getElementById('myElement');
    element.classList.toggle('highlight');
}
