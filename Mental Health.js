document.getElementById('story-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const storyText = document.getElementById('story').value;
    const name = document.getElementById('name').value || 'Anonymous';

    if (storyText.trim() === '') {
        alert('Please write a story before submitting.');
        return;
    }

    // Create a story card
    const storyCard = document.createElement('div');
    storyCard.classList.add('story-card');

    storyCard.innerHTML = `
        <h3>${name}</h3>
        <p>${storyText}</p>
    `;

    // Add the story to the list
    document.getElementById('story-list').appendChild(storyCard);

    // Clear the form
    document.getElementById('story-form').reset();
});
