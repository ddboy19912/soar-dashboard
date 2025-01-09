import CardDetails from "@/components/common/CardDetails"
import CreditCard from "@/components/common/CreditCard"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { useCards } from "@/hooks/useCards"
import { useCallback, useState } from "react"

const MyCards = () => {
  const { data: cards, isLoading } = useCards()

  const [showAllCards, setShowAllCards] = useState(false)

  const handleShowAllCards = useCallback(() => {
    setShowAllCards(true)
  }, [])

  return (
    <>
      <div className="chromebook:max-w-[730px]">
        <div className="flex justify-between items-center">
          <h2 className="text-accent-blue">My Cards</h2>
          <p
            className="text-[17px] text-accent-blue duration-300 hover:text-soft-blue transition-colors cursor-pointer"
            onClick={handleShowAllCards}
          >
            See All
          </p>
        </div>
        <div className="mt-5">
          <div className="flex gap-[30px]">
            {cards?.map((card) => (
              <CreditCard
                key={card.id}
                balance={card.balance}
                cardNumber={card.cardNumber}
                holderName={card.cardHolder}
                validThru={card.expiryDate}
                cardColor={card.cardColor}
                isLoading={isLoading}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={showAllCards} onOpenChange={setShowAllCards}>
        <DialogContent className="max-w-[800px]">
          <DialogHeader>
            <DialogTitle>My Cards</DialogTitle>
            <DialogDescription className="sr-only">
              List of your cards
            </DialogDescription>
          </DialogHeader>
          <div className="grid max-h-[80vh] overflow-y-auto">
            {cards?.map((card) => (
              <div key={card.id} className="space-y-4">
                <div className="flex items-center justify-around">
                  <CreditCard
                    balance={card.balance}
                    cardNumber={card.cardNumber}
                    holderName={card.cardHolder}
                    validThru={card.expiryDate}
                    cardColor={card.cardColor}
                    isLoading={isLoading}
                  />
                  <CardDetails card={card} />
                </div>
                {card.id !== cards[cards.length - 1].id && <hr />}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MyCards
