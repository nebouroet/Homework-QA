export interface Product {
  id: number;
  name: string;
  price: string;
  descriptionSnippet: string;
}
 
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Skinsheen Bronzer Stick',
    price: '$29.50',
    descriptionSnippet: 'A smooth, blendable bronzer stick',
  },
  {
    id: 2,
    name: 'BeneFit Girl Meets Pearl',
    price: '$19.00',
    descriptionSnippet: 'A luminizing face primer',
  },
  {
    id: 3,
    name: 'Absolute Anti-Age Spot Replenishing Unifying Treatment',
    price: '$42.00',
    descriptionSnippet: 'Advanced anti-aging treatment',
  },
  {
    id: 4,
    name: 'Casual 3/4 Sleeve Baseball T-Shirt',
    price: '$14.00',
    descriptionSnippet: 'Comfortable and stylish baseball-style t-shirt',
  },
  {
    id: 5,
    name: 'Designer Men Casual Formal Double Cuffs Grandad Shirt',
    price: '$26.00',
    descriptionSnippet: 'Elegant grandad collar shirt',
  },
  {
    id: 6,
    name: 'ck IN2U Eau De Toilette Spray',
    price: '$36.00',
    descriptionSnippet: 'A fresh and modern fragrance',
  },
  {
    id: 7,
    name: 'Curls to Straight Shampoo',
    price: '$12.00',
    descriptionSnippet: 'Specially formulated shampoo',
  },
  {
    id: 8,
    name: 'The Catcher in the Rye',
    price: '$8.50',
    descriptionSnippet: "J.D. Salinger's classic coming-of-age novel",
  },
];