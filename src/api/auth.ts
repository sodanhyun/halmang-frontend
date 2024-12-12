import axios from "axios";
import { LoginRequest, LoginResponse } from "../type/auth";

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

// 로그인
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${BASE_URL}/auth/login`, data);
  return response.data;
};
