export interface Chef {
  id: string;
  name: string;
  gender: 'male' | 'female' | 'other';
  rating: number;
  area: string;
  specialities: string[];
  isVerified: boolean;
}

export interface MenuItem {
  id: string;
  chefId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isVegetarian: boolean;
  preparationTime: number;
  image: string;
}

export interface Order {
  id: string;
  userId: string;
  chefId: string;
  items: {
    menuItemId: string;
    quantity: number;
  }[];
  status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered';
  totalAmount: number;
  deliveryAddress: string;
  orderDate: Date;
}