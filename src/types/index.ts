export interface User {
  id: string;
  firstname: string;
  lastname: string;
  passwordHash: string;
}

export interface Customer {
  id: string;
  userId: string;
  user?: User;
}

export interface Product {
  id: number;
  name: string;
  stock: number;
}

export interface Order {
  id: string;
  productId: string;
  customerId: string;
  product?: Product;
  customer?: Customer;
}