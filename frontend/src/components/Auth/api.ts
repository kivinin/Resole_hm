import { Message, User } from './types/types';

export const login = async (obj: User): Promise<User | Message> => {
  const res = await fetch('/api/auth/sign-in', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  });
  return res.json();
};
export const session = async (): Promise<User | Message> => {
  const res = await fetch('/api/auth/verification', { credentials: 'include' });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};
export const logout = async (): Promise<Message> => {
  const res = await fetch('/api/auth/logout', { credentials: 'include' });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};
