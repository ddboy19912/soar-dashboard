export interface Card {
  id: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
  type: "visa" | "mastercard";
  cardColor: "dark" | "light";
  balance: number;
}
