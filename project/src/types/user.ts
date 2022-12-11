export type User = {
  id: number;
  avatarUrl: string;
  email: string;
  name: string;
  token: string;
};

export type AuthData = {
  email: string;
  password: string;
};
