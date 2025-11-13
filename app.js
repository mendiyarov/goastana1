
const dateCards = document.querySelectorAll('.date-card');

dateCards.forEach(card => {
    card.addEventListener('click', () => {
        dateCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

// можно добавить любое поведение дальше (фильтрация мероприятий и т.п.)
