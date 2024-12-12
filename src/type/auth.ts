export interface LoginRequest {
  id: string;
  password: string;
}

export interface UserRole {
  type: string;
  name: string;
}

export interface LoginResponse {
  userId: string;
  accessToken: string;
  refreshToken: string;
  userType: string;
  userRole: UserRole;
}
