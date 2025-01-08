export const formatCardNumber = (cardNumber: string) => {
  // Remove any spaces or special characters
  const cleaned = cardNumber.replace(/\s+/g, "")

  // Split into visible and masked parts
  const firstFour = cleaned.slice(0, 4)
  const lastFour = cleaned.slice(-4)

  // Returns formatted number with stars
  return `${firstFour} **** **** ${lastFour}`
}
