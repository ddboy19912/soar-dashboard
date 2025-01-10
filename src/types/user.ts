export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  presentAddress: string;
  permanentAddress: string;
  phoneNumber: string;
  city: string;
  password: string;
  country: string;
  postalCode: string;
  dob: string;
  profilePicture?: string;
  balance: number;
}
