export type Product = {
  id: number;
  product_name: string;
  product_price: string;
  product_description: string;
  product_image: string;
};

export type ProductId = Product['id'];
