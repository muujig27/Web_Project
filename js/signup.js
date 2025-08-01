location.href = '/https://muujig27.github.io/Web_Project//index.html';

function handleSignup() {
    const id = document.getElementById('signupId').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const pw = document.getElementById('signupPw').value;

    if (!id || !email || !pw) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    const userData = { id, email, pw };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
    location.href = 'login.html';
  }