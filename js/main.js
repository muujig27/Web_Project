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