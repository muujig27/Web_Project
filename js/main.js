const games = [
  { id: 1, name: "Counter-Strike 2", genre: ["FPS", "action"], img: "IMG/CS-2.jpg", page: "cs2.html" },
  { id: 2, name: "사이버펑크 2077", genre: ["FPS", "action"], img: "IMG/SP-2077.jpg", page: "sp2077.html" },
  { id: 3, name: "레인보우 식스 시즈", genre: ["FPS", "action"], img: "IMG/RSS.jpg", page: "rainbowsix.html" },
  { id: 4, name: "Once Human", genre: ["adventure"], img: "IMG/Once_Human.jpg", page: "onceHuman.html" },
  { id: 5, name: "REPO", genre: ["adult"], img: "IMG/REPO.jpg", page: "repo.html" },
  { id: 6, name: "The_Forest", genre: ["adventure"], img: "IMG/The_Forest.jpg", page: "theForest.html" },
  { id: 7, name: "다크디셉션", genre: ["adult"], img: "IMG/DD.jpg", page: "darkDeception.html" },
  { id: 8, name: "데바데", genre: ["adult"], img: "IMG/dbd.jpg", page: "dbd.html" },
  { id: 9, name: "레포데", genre: ["FPS", "action"], img: "IMG/4.jpg", page: "left4Dead.html" },
  { id: 10, name: "언더테일", genre: ["adventure"], img: "IMG/undertaleIcon.png", page: "undertale.html" },
  { id: 11, name: "얼불춤", genre: ["music"], img: "IMG/justDanceIcon.jpg", page: "justDance.html" },
  { id: 12, name: "엘든링", genre: ["rpg", "adventure"], img: "IMG/eldenRingIcon.jpg", page: "eldenRing.html" },
  { id: 13, name: "오버워치2", genre: ["FPS"], img: "IMG/overwatch2Icon.png", page: "overwatch2.html" },
  { id: 14, name: "이터널 리턴", genre: ["battle_royale", "strategy"], img: "IMG/eternalReturnIcon.jpg", page: "eternalReturn.html" },
  { id: 15, name: "좀비고", genre: ["casual", "action"], img: "IMG/zombieHighSchoolIcon.jpg", page: "zombieHighSchool.html" },
  { id: 16, name: "클래시 로얄", genre: ["strategy", "card"], img: "IMG/clashRoyaleIcon.jpg", page: "clashRoyale.html" },
  { id: 17, name: "테라리아", genre: ["adventure", "simulation"], img: "IMG/terrariaIcon.jpg", page: "terraria.html" },
  { id: 18, name: "파피 플레이타임", genre: ["adult", "puzzle"], img: "IMG/poppyPlaytimeIcon.jpg", page: "poppyPlaytime.html" },
  { id: 19, name: "팰월드", genre: ["adventure", "simulation"], img: "IMG/palworldIcon.jpg", page: "palworld.html" },
  { id: 20, name: "더 파이널스", genre: ["FPS", "action"], img: "IMG/theFinalls.png", page: "theFinals.html" },
  { id: 21, name: "League of Legends", genre: ["strategy"], img: "IMG/leagueOfLegendsIcon.jpg", page: "leagueOfLegends.html" },
  { id: 22, name: "Minecraft", genre: ["simulation", "adventure"], img: "IMG/minecraftIcon.png", page: "minecraft.html" },
  { id: 23, name: "Valorant", genre: ["FPS", "action"], img: "IMG/valorantIcon.png", page: "valorant.html" },
  { id: 24, name: "PUBG", genre: ["FPS", "battle_royale"], img: "IMG/pubgIcon.png", page: "pubg.html" },
  { id: 25, name: "Brawl Stars", genre: ["action", "casual"], img: "IMG/brawlStarsIcon.jpg", page: "brawlStars.html" },
  { id: 26, name: "산나비", genre: ["girl's_game", "man's_game"], img: "IMG/sanabiIcon.png", page: "sanabi.html" },
  { id: 27, name: "Sekiro", genre: ["action", "adventure"], img: "IMG/sekiroIcon.png", page: "sekiro.html" },
  { id: 28, name: "Ark: Survival Evolved", genre: ["survival", "simulation"], img: "IMG/arkSurvivalIcon.png", page: "arkSurvival.html" },
  { id: 29, name: "Among Us", genre: ["casual"], img: "IMG/amongUsIcon.png", page: "amongUs.html" }
];

// location.href = 'https://muujig27.github.io/Web_Project/index.html';

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
      <div class="game-item" data-page="${game.page}">
        <img src="${game.img}" alt="${game.name}" />
        <p>${game.name}</p>
      </div>
    `).join('');

    document.querySelectorAll('.game-item').forEach(item => {
      item.addEventListener('click', () => {
        const page = item.getAttribute('data-page');
        location.href = page;
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
