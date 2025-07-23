const games = [
  { id: 1, name: "Counter-Strike 2", genre: ["FPS", "action"], img: "img/CS-2.jpg" },
  { id: 2, name: "사이버펑크 2077", genre: ["rpg"], img: "img/SP-2077.jpg" },
  { id: 3, name: "레인보우 식스 시즈", genre: ["strategy"], img: "img/RSS.jpg" },
  // 필요한 만큼 추가
];

const gameListEl = document.getElementById('gameList');
const searchInput = document.getElementById('searchInput');
const genreButtons = document.querySelectorAll('.genres button');

function renderGames(filterGenre = 'all', searchTerm = '') {
  const filteredGames = games.filter(game => {
    const matchGenre = filterGenre === 'all' || (Array.isArray(game.genre) && game.genre.includes(filterGenre));
    const matchSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchGenre && matchSearch;
  });

  if (gameListEl) {
    gameListEl.innerHTML = filteredGames.map(game => `
      <div class="game-item" data-id="${game.id}">
        <img src="${game.img}" alt="${game.name}" />
        <p>${game.name}</p>
      </div>
    `).join('');

    document.querySelectorAll('.game-item').forEach(item => {
      item.addEventListener('click', () => {
        const gameId = item.getAttribute('data-id');
        location.href = `game_detail.html?id=${gameId}`;
      });
    });
  }
}

if (searchInput && genreButtons.length > 0) {
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const activeGenreBtn = document.querySelector('.genres button.active');
      const genre = activeGenreBtn ? activeGenreBtn.getAttribute('data-genre') : 'all';
      renderGames(genre, searchInput.value.trim());
    }
  });

  document.getElementById('searchIcon')?.addEventListener('click', () => {
    const activeGenreBtn = document.querySelector('.genres button.active');
    const genre = activeGenreBtn ? activeGenreBtn.getAttribute('data-genre') : 'all';
    renderGames(genre, searchInput.value.trim());
  });

  genreButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      genreButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGames(btn.getAttribute('data-genre'), searchInput.value.trim());
    });
  });
}

renderGames();
