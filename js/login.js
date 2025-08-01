// location.href = 'https://muujig27.github.io/Web_Project/index.html';

const loginBtn = document.getElementById('loginBtn');
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    const inputId = document.getElementById('userid').value.trim();
    const inputPw = document.getElementById('password').value;

    if (!inputId || !inputPw) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      alert('등록된 회원 정보가 없습니다. 회원가입을 먼저 해주세요.');
      return;
    }

    if ((inputId === userData.id || inputId === userData.email) && inputPw === userData.pw) {
      alert('로그인 성공!');
      localStorage.setItem('isLoggedIn', 'true');
      location.href = 'index.html';
    } else {
      alert('아이디/이메일 또는 비밀번호가 일치하지 않습니다.');
    }
  });
}

// 로그아웃 버튼 처리
function handleLogout() {
  localStorage.removeItem('isLoggedIn');
  location.reload();
}

// 회원가입 링크 클릭 시 이동
const goSignUpLink = document.getElementById('goSignUp');
if (goSignUpLink) {
  goSignUpLink.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = 'signup.html';
  });
}

// 소셜 로그인 버튼 (임시 알림 메시지)
const googleLogin = document.getElementById('googleLogin');
const naverLogin = document.getElementById('naverLogin');
const kakaoLogin = document.getElementById('kakaoLogin');

googleLogin?.addEventListener('click', () => {
  alert('구글 로그인 연동 필요');
});
naverLogin?.addEventListener('click', () => {
  alert('네이버 로그인 연동 필요');
});
kakaoLogin?.addEventListener('click', () => {
  alert('카카오 로그인 연동 필요');
});

window.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const nav = document.querySelector('nav');

  if (isLoggedIn && nav) {
    nav.innerHTML = `
      <div style="display: flex; align-items: center; gap: 10px;">
        <button id="profileBtn" style="background: transparent; border: none; cursor: pointer;">
          <img src="IMG/profile_icon.png" alt="프로필" style="width: 32px; height: 32px; border-radius: 50%;" />
        </button>
        <button id="logoutBtn" style="background: white; color: #333; border: 1px solid #333; padding: 10px 10px; border-radius: 4px; cursor: pointer;">
          로그아웃
        </button>
      </div>
    `;

    document.getElementById('logoutBtn')?.addEventListener('click', handleLogout);
  }
});