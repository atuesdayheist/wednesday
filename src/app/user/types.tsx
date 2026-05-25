export type User = {
  name: string;
  email: string;
  picture: string | null;
};

export type UserContextType = {
  username: string | null;
  email: string | null;
  picture: string | null;
  loading: boolean;
  setAuth: (user: User) => void;
  logout: () => void;
};
