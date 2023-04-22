import { Customer } from "./types/Customer";

// export const getUsers = async (): Promise<Customer[]> => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// };

// export const removeUser = async (userId: number): Promise<number> => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   return res.json();
// };

export const postCustomer = async (): Promise<Customer> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};