import { useToast } from "@/hooks/use-toast"
import { Card } from "@/types"
import { Copy } from "lucide-react"

const CardDetails = ({ card }: { card: Card }) => {
  const { toast } = useToast()

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    toast({
      description: `${field} copied to clipboard`,
      duration: 2000,
    })
  }

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
        <div>
          <p className="text-sm text-gray-500">Card Number</p>
          <p className="font-medium">{card.cardNumber}</p>
        </div>
        <button onClick={() => copyToClipboard(card.cardNumber, "Card number")}>
          <Copy className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
        <div>
          <p className="text-sm text-gray-500">Card Holder</p>
          <p className="font-medium">{card.cardHolder}</p>
        </div>
        <button
          onClick={() => copyToClipboard(card.cardHolder, "Card holder name")}
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
        <div>
          <p className="text-sm text-gray-500">Expiry Date</p>
          <p className="font-medium">{card.expiryDate}</p>
        </div>
        <button onClick={() => copyToClipboard(card.expiryDate, "Expiry date")}>
          <Copy className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
        <div>
          <p className="text-sm text-gray-500">Balance</p>
          <p className="font-medium">${card.balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
