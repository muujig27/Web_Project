function handleKeyPress(event) {
    if (event.key === 'Enter') {
      const activeGenreBtn = document.querySelector('.genres button.active');
      const genre = activeGenreBtn ? activeGenreBtn.getAttribute('data-genre') : 'all';
      renderGames(genre, searchInput.value.trim());
    }
  }
  
  document.getElementById('searchIcon').addEventListener('click', () => {
    const activeGenreBtn = document.querySelector('.genres button.active');
    const genre = activeGenreBtn ? activeGenreBtn.getAttribute('data-genre') : 'all';
    renderGames(genre, searchInput.value.trim());
  });
  
  // renderGames 함수 내 검색 대소문자 구분 없애기
  function renderGames(filterGenre = 'all', searchTerm = '') {
    const filteredGames = games.filter(game => {
      const matchGenre = filterGenre === 'all' || game.genre === filterGenre;
      const matchSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchGenre && matchSearch;
    });
  
    // ... 이하 동일
  }

  // main.js

// ============================
// 로그인 / 회원가입 이동
// ============================
const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    location.href = 'login.html';
  });
}

if (signUpBtn) {
  signUpBtn.addEventListener('click', () => {
    location.href = 'signup.html';
  });
}

// ============================
// 장르 필터링 기능 (다중 장르)
// ============================
const games = [
  { id: 1, name: "Counter-Strike 2", genre: ["FPS", "action"], img: "img/cs2.jpg" },
  { id: 2, name: "사이버펑크 2077", genre: ["rpg"], img: "img/cp2077.jpg" },
  { id: 3, name: "레인보우 식스 시즈", genre: ["strategy"], img: "img/rss.jpg" },
  // 추가 게임들...
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

// ============================
// 리뷰 작성 시 로그인 여부 확인 (game_detail.html)
// ============================
function checkLogin() {
  const isLoggedIn = false; // 실제 로그인 여부로 변경 필요
  if (!isLoggedIn) {
    alert("로그인이 필요합니다.");
  } else {
    location.href = 'review_form.html';
  }
}

// ============================
// 러시아 국기 클릭 시 이동 (game_detail.html)
// ============================
function goCountry(code) {
  if (code === 'ru') {
    location.href = 'country.html';
  } else {
    alert(`${code.toUpperCase()} 국가는 아직 준비 중입니다.`);
  }
}

// ============================
// 이벤트 상세 정보 출력 (country.html)
// ============================
function showEventDetail(el) {
  alert(el.innerText + ' 상세 정보입니다.');
}

// ============================
// login.html 내 회원가입 링크 처리
// ============================
document.getElementById('goSignUp')?.addEventListener('click', (e) => {
  e.preventDefault();
  location.href = 'signup.html';
});

// ============================
// 소셜 로그인 알림
// ============================
document.getElementById('googleLogin')?.addEventListener('click', () => {
  alert('구글 로그인 연동 필요');
});

document.getElementById('naverLogin')?.addEventListener('click', () => {
  alert('네이버 로그인 연동 필요');
});

document.getElementById('kakaoLogin')?.addEventListener('click', () => {
  alert('카카오 로그인 연동 필요');
});
