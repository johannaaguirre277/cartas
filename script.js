// Función para dar la vuelta a la carta al hacer clic
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Lógica para barajar las cartas
const shuffleBtn = document.getElementById('shuffle-btn');
const container = document.getElementById('playing-cards');

shuffleBtn.addEventListener('click', () => {
    let cardsArray = Array.from(container.children);
    cardsArray.sort(() => Math.random() - 0.5);
    cardsArray.forEach(card => {
        container.appendChild(card);
    });
});