import { UserRole } from "../type/user";

const judgeUserRole = (role: UserRole): string => {
  switch (role) {
    case UserRole.PARENT:
      return "엄마";
    case UserRole.CHILD:
      return "자녀";
  }
};

export { judgeUserRole };
