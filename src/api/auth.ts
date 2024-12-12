import axios from "axios";
import { LoginRequest, LoginResponse } from "../type/auth";
import { VITE_REACT_APP_BASE_URL } from "../constants";

// 로그인
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${VITE_REACT_APP_BASE_URL}/auth/login`, data);
  return response.data;
};
