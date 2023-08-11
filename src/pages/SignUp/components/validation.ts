export default function validateInput(
  email: string,
  password: string,
): string | null {
  // 두 필드가 빈 문자열인 경우 검증하지 않습니다.
  if (!email && !password) {
    return null;
  }

  if (!email.includes('@')) {
    return '이메일에 @가 포함되어있지 않습니다';
  }

  if (password.length < 8) {
    return '비밀번호는 8자 이상 작성해주세요';
  }

  return null;
}
