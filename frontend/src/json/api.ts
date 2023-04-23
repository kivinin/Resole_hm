import { Customer } from "./types/Customer";
import { Service } from "./types/Service";
import { Product } from "./types/Product";
import { Order } from "./types/Order";

// export const getUsers = async (): Promise<Customer[]> => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// };

// export const removeUser = async (userId: number): Promise<number> => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//   return res.json();
// };

// export const postCustomer = async (): Promise<Customer> => {
//   const res = await fetch('api/client');
//   return res.json();
// };

export const postCustomer = async (obj: Customer): Promise<Customer> => {
  const res = await fetch("/api/client", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};

export const postOrder = async (obj: Order): Promise<Order> => {
  const res = await fetch("/api/order", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};


export const getService = async (): Promise<Service[]> => {
  const res = await fetch("/api/service", {
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};

export const getProduct = async (): Promise<Product[]> => {
  const res = await fetch("/api/products", {
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  return res.json();
};
