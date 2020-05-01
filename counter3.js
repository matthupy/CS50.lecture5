document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;
})

// Default counter variable
let counter=0

// Function to change the heading to say goodbye
function count() {
    counter++
    document.querySelector('#counter').innerHTML = counter;

    if (counter % 10 === 0) {
        alert('Counter is at ' + counter + '!')
    }
}