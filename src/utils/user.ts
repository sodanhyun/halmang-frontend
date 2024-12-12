import useAuthStore from "../store/useAuthStore";

const judgeUserRole = (): string => {
  const { receiver_id } = useAuthStore.getState();
  switch (receiver_id) {
    case "parent":
      return "동백";
    case "child":
      return "감귤";
    default:
      return "알 수 없음";
  }
};

export { judgeUserRole };
