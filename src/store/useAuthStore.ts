import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  receiver_id: string | null; // 상대방 ID
  userType: {
    type: string | null; // 로그인 사용자 타입
    name: string | null; // 로그인 사용자 이름
  } | null;
  setUserType: (userType: { type: string; name: string }) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      receiver_id: null,
      userType: null,
      setUserType: (userType) => {
        const receiver_id = userType.name === "parent" ? "child" : "parent";
        set({
          receiver_id,
          userType: {
            type: userType.type,
            name: userType.name,
          },
        });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
