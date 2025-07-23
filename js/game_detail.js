document.getElementById('reviewBtn')?.addEventListener('click', checkLogin);

document.querySelectorAll('.country-flag').forEach(flag => {
    flag.addEventListener('click', () => {
        const code = flag.src.includes('ru') ? 'ru'
            : flag.src.includes('us') ? 'us'
                : flag.src.includes('br') ? 'br' : '';
        if (code === 'ru') {
            location.href = 'country.html';
        } else {
            alert(`${code.toUpperCase()} 국가는 아직 준비 중입니다.`);
        }
    });
});

function goCountry(code) {
    if (code === 'ru') location.href = 'country.html';
}

function checkLogin() {
  const isLoggedIn = false; // 예시: 실제 구현 필요
  if (!isLoggedIn) alert("로그인이 필요합니다.");
  else location.href = 'review_form.html';
}