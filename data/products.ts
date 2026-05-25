export interface Product {
  id: string;
  category: 'Earbuds';
  name: string;
  price: string;
  description: string;
  specs: Record<string, string>;
  image: string;
}

export const products: Product[] = [
  // --- EARBUDS ---
  {
    id: "earbuds-essential-100",
    category: "Earbuds",
    name: "Everyday Essential Earbuds",
    price: "Rs. 2,500",
    description: "Pocket-friendly wireless earbuds featuring clear voice calls and a highly compact charging case.",
    specs: { 
      "Bluetooth Version": "5.1", 
      "Battery Life": "Up to 20 hours (with case)",  
    },
    image: "/images/earbuds-essential-100.jpg"
  }
];