import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  receiver_id: string | null;
  setUserType: (userType: { type: string; name: string }) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      receiver_id: null,
      setUserType: (userType) => {
        const receiver_id = userType.name === "parent" ? "child" : "parent";
        set({ receiver_id });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
