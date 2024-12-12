import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { LoginRequest, LoginResponse } from "../type/auth";
import BackgroundImage from "/static/images/login-background.svg";
import HeaderLogo from "../../static/images/HeaderLogo.svg";
import useAuthStore from "../store/useAuthStore";

const LoginPage = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { setUserType } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !password) {
      setErrorMessage("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    const requestData: LoginRequest = { id, password };

    try {
      const response: LoginResponse = await login(requestData);
      setUserType(response.userType);
      navigate("/");
    } catch (error) {
      console.error("로그인 실패:", error);
      setErrorMessage("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white pb-20">
      <img src={HeaderLogo} className="w-[168px] h-[40px] mb-14" alt="Header Logo" />
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full px-[24px]">
        <div className="flex-col justify-start items-start gap-1 w-full mb-[24px]">
          <div className="text-body3SemiBold mb-[8px]">아이디</div>
          <div className="h-[54px] px-4 py-[18px] bg-[#f2efeb] rounded-xl flex justify-between items-center focus-within:ring-2 focus-within:ring-illustration-yellow">
            <input
              id="id"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full bg-transparent outline-none text-sm font-medium text-primary-brown-950 placeholder:text-[#bdbdbd]"
              placeholder="아이디를 입력해주세요"
            />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-1 w-full mb-[24px]">
          <div className="text-body3SemiBold mb-[8px]">비밀번호</div>
          <div className="h-[54px] px-4 py-[18px] bg-[#f2efeb] rounded-xl flex justify-between items-center focus-within:ring-2 focus-within:ring-illustration-yellow">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none text-sm font-medium text-primary-brown-950 placeholder:text-[#bdbdbd]"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full h-[62px] bg-illustration-yellow hover:bg-blue-950 active:bg-blue-950 rounded-[20px] flex justify-center items-center gap-2.5 transition-colors duration-200">
          <div className="text-center text-blue-50 text-body3Bold font-['Pretendard']">로그인하기</div>
        </button>
        <div className="h-[20px] mt-2">
          {errorMessage && <div className="text-sm text-red-500">{errorMessage}</div>}
        </div>
      </form>
      <img src={BackgroundImage} alt="Background Illustration" className="absolute bottom-0 w-full" />
    </div>
  );
};

export default LoginPage;
