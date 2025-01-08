export interface Contact {
  id: string
  name: string
  profilePicture: string
  accountNumber: string
  bank: string
  recentTransaction?: string
  isFavorite: boolean
  occupation?: string
}
