const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    document.getElementById('card-content');
    const currentCard = flashcards[currentIndex];
    document.getElementById('card-content').textContent = showingTerm ? currentCard.term : currentCard.definition;

}

// The rest of the code you will write is apart of event listeners
document.getElementById('next-btn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showingTerm = true;
    displayCard();
});

document.getElementById('prev-btn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length; 
    showingTerm = true; 
    displayCard();
});

document.getElementById('flashcard').addEventListener('click', function() {
    showingTerm = !showingTerm; 
    displayCard();
});

document.getElementById('add-card-btn').addEventListener('click', function() {
    const newTerm = document.getElementById('new-term').value.trim();
    const newDef = document.getElementById('new-definition').value.trim();
    flashcards.push({ term: newTerm, definition: newDef });
    document.getElementById('new-term').value = '';
    document.getElementById('new-definition').value = '';
    displayCard();
});

// This line will display the card when the page is refreshed
window.onload = displayCard;