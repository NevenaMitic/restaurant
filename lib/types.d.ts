// Tip za kolekciju proizvoda
type CollectionType = {
  _id: string;
  title: string;
  products: number;
  description: string;
  image: string;
};

// Tip za proizvod
type ProductType = {
  _id: string;
  title: string;
  description: string;
  ingredients: string;
  media: [string];
  category: string;
  collections: [string];
  tags: [string];
  price: number;
  pieces: number;
  createdAt: Date;
  updatedAt: Date;
  discount: number; 
  discountedPrice?: number | null; 
}

//Tip za korisnika
type UserType = {
  clerkId: string;
  createdAt: string;
  updatedAt: string;
};
// Tip za narudžbinu
type OrderType = {
  _id: string;
  customerClerkId: string;
  products: [OrderItemType]
  discount?: number;
  discountedPrice?: number | null;
  totalAmount: number
  createdAt: string;
}
// Tip za stavku narudžbine
type OrderItemType = {
  product: ProductType;
  quantity: number;
  price: number;
  discount?: number;
  discountedPrice?: number | null;
  pieces: number;
  _id: string;
  createdAt: string;
}