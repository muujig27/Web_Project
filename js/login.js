const dummyUser = {
  username: 'testuser',
  password: '1234'
};

document.getElementById('loginBtn')?.addEventListener('click', () => {
  const userId = document.getElementById('userid').value.trim();
  const userPw = document.getElementById('password').value;

  if (!userId || !userPw) {
    alert('아이디와 비밀번호를 입력해주세요.');
    return;
  }

  if (userId === dummyUser.username && userPw === dummyUser.password) {
    alert('로그인 성공!');
    // 예: 메인 페이지로 이동
    location.href = 'index.html';
  } else {
    alert('아이디 또는 비밀번호가 올바르지 않습니다.');
  }
});

document.getElementById('goSignUp')?.addEventListener('click', (e) => {
  e.preventDefault();
  location.href = 'signup.html';
});

document.getElementById('googleLogin')?.addEventListener('click', () => {
  alert('구글 로그인 연동 필요');
});
document.getElementById('naverLogin')?.addEventListener('click', () => {
  alert('네이버 로그인 연동 필요');
});
document.getElementById('kakaoLogin')?.addEventListener('click', () => {
  alert('카카오 로그인 연동 필요');
});
