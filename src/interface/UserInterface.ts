export interface UserInfoInter {
  username: string;
  password: string;
  role?: "admin" | "user";
}

export interface LoginInter {
  username: string;
  password: string;
}
