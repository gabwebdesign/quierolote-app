export interface User {
  _id?: string;
  id?: string;
  name?: string;
  role?: UserRole;
  email?: string;
  password?: string;
  phone?: string;
}

export type UserRole = 'admin' | 'user';