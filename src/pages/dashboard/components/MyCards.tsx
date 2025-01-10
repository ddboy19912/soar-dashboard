import CardDetails from "@/components/common/CardDetails";
import CreditCard from "@/components/common/CreditCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useCards } from "@/hooks/useCards";
import { useCallback, useState } from "react";

const MyCards = () => {
  const { data: cards, isLoading } = useCards();

  const [showAllCards, setShowAllCards] = useState(false);

  const handleShowAllCards = useCallback(() => {
    setShowAllCards(true);
  }, []);

  return (
    <>
      <div className="chromebook:max-w-[730px]">
        <div className="flex justify-between items-center">
          <h2 className="text-accent-blue">My Cards</h2>
          <p
            className="text-sm md:text-[17px] text-accent-blue duration-300 hover:text-soft-blue transition-colors cursor-pointer"
            onClick={handleShowAllCards}
          >
            See All
          </p>
        </div>
        <div className="mt-[22px] chromebook:mt-5">
          <div className="flex gap-[20px] chromebook:gap-[30px] overflow-x-auto hide-scrollbar w-[calc(100vw-25px)] -mr-[25px] chromebook:w-auto chromebook:mr-0">
            {cards?.map((card) => (
              <div key={card.id} className="shrink-0">
                <CreditCard
                  balance={card.balance}
                  cardNumber={card.cardNumber}
                  holderName={card.cardHolder}
                  validThru={card.expiryDate}
                  cardColor={card.cardColor}
                  isLoading={isLoading}
                />
              </div>
            ))}
            <div
              className="shrink-0 w-[5px] h-1 chromebook:hidden"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <Dialog open={showAllCards} onOpenChange={setShowAllCards}>
        <DialogContent className="max-w-[800px] w-[95%] p-4 chromebook:p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl">My Cards</DialogTitle>
            <DialogDescription>List of your cards</DialogDescription>
          </DialogHeader>
          <div className="grid max-h-[80vh] overflow-y-auto gap-x-[30px] chromebook:gap-x-0">
            {cards?.map((card, index) => (
              <div key={card.id} className="space-y-4">
                <div className="flex flex-col chromebook:flex-row chromebook:items-center chromebook:justify-around gap-3 chromebook:gap-6">
                  <div className="flex flex-col items-center w-full chromebook:w-auto">
                    <h2 className="text-accent-blue mb-4 text-xl">
                      Card {index + 1}
                    </h2>
                    <CreditCard
                      balance={card.balance}
                      cardNumber={card.cardNumber}
                      holderName={card.cardHolder}
                      validThru={card.expiryDate}
                      cardColor={card.cardColor}
                      isLoading={isLoading}
                    />
                  </div>
                  <div className="w-full chromebook:w-auto">
                    <CardDetails card={card} />
                  </div>
                </div>
                {card.id !== cards[cards.length - 1].id && (
                  <hr className="hidden chromebook:block chromebook:my-6" />
                )}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MyCards;
