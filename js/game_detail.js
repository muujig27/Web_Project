document.querySelectorAll('.country-flag')?.forEach(flag => {
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
  
  // 국가 코드 직접 처리 함수 (백업용)
  function goCountry(code) {
    if (code === 'ru') location.href = 'country.html';
  }
  
  // 리뷰 작성 버튼 클릭 시 로그인 여부 확인
  function checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
    } else {
      location.href = 'review_form.html';
    }
  }
  
  // 리뷰 버튼이 존재할 경우 이벤트 바인딩
  const reviewBtn = document.getElementById('reviewBtn');
  reviewBtn?.addEventListener('click', checkLogin);

  function submitReview() {
    const content = document.getElementById('reviewContent')?.value.trim();
    if (!content) {
      alert('리뷰 내용을 입력해주세요.');
      return;
    }
    alert('리뷰가 성공적으로 등록되었습니다!');
    // 여기에 서버 전송 또는 localStorage 저장 로직 추가 가능
  }