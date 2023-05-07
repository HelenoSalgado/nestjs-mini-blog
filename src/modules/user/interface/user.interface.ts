export interface User {

  id: string;
  name: string;
  email: string;
  subdominio: string;
  password: string;

}

export type UpdateUser = Omit<Partial<User>, 'email' | 'subdominio' >