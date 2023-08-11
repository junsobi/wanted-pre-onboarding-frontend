import { AxiosError } from 'axios';
import { ErrorResponse } from '../../../types/types';
import { signUp } from '../../../services/authAPI';

export const registerUser = async (email: string, password: string) => {
  try {
    const response = await signUp(email, password);

    if (response.status !== 201) {
      throw new Error('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
    return true;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    if (
      axiosError.response?.data.statusCode === 400 &&
      axiosError.response?.data.message === '동일한 이메일이 이미 존재합니다.'
    ) {
      throw new Error('동일한 이메일이 이미 존재합니다.');
    } else {
      console.error('API 요청 중 에러가 발생했습니다:', axiosError);
      throw new Error('서버에 문제가 발생했습니다. 다시 시도해주세요.');
    }
  }
};
