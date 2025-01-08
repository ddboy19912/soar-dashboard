import { ChipIllustration } from "@/assets"
import { formatCardNumber } from "@/lib/card"

interface CreditCardProps {
  balance: number
  holderName: string
  validThru: string
  cardNumber: string
  cardColor: "dark" | "light"
  isLoading?: boolean
}

const CreditCard = ({
  balance,
  holderName,
  validThru,
  cardNumber,
  cardColor = "dark",
  isLoading = true,
}: CreditCardProps) => {
  const cardColorClass = cardColor === "dark" ? "bg-card-gradient" : "bg-white"
  const textColorClass =
    cardColor === "dark" ? "text-white" : "text-accent-blue"
  const fadeTextColorClass =
    cardColor === "dark" ? "text-white/70" : "text-soft-blue"
  const cardBorderClass =
    cardColor === "dark" ? "border-transparent" : "border-card-border"
  const chipFilter = cardColor === "light" ? "invert" : ""

  if (isLoading) {
    return (
      <div
        className={`rounded-[25px] border ${cardColorClass} ${cardBorderClass} w-[350px] h-[235px] overflow-hidden relative`}
      >
        <div className="absolute inset-0 translate-x-[-100%] animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    )
  }

  return (
    <div
      className={`rounded-[25px] ${cardColorClass} ${textColorClass} w-[350px] h-[235px] overflow-hidden pb-5 pt-6 px-[25px] relative border ${cardBorderClass}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p
            className={`small-text font-lato ${cardColor === "light" ? "text-soft-blue" : ""}`}
          >
            Balance
          </p>
          <p className="text-[20px] leading-6 font-semibold font-lato">
            ${balance}
          </p>
        </div>
        <img
          className={`size-[34.77px] object-contain ${chipFilter}`}
          loading="lazy"
          src={ChipIllustration}
          alt="chip"
        />
      </div>
      <div className="flex items-center gap-[67px] mt-[33px]">
        <div className="flex flex-col">
          <p className={`small-text ${fadeTextColorClass} uppercase font-lato`}>
            Card Holder
          </p>
          <p className="text-[15px] leading-[1.2] mt-[2px] font-semibold font-lato">
            {holderName}
          </p>
        </div>
        <div className="flex flex-col">
          <p className={`small-text ${fadeTextColorClass} uppercase font-lato`}>
            Valid Thru
          </p>
          <p className="text-[15px] leading-[1.2] mt-[2px] font-semibold font-lato">
            {validThru}
          </p>
        </div>
      </div>
      <div
        className={`card-footer bg-card-bottom-gradient absolute bottom-0 left-0 w-full h-[70px] flex items-center justify-between px-[25px] border-t ${cardBorderClass}`}
      >
        <h2 className={`font-lato`}>{formatCardNumber(cardNumber)}</h2>
        <div className="relative w-[44px] h-[30px]">
          <div className="absolute size-[30px] rounded-full bg-white/50" />
          <div className="absolute left-4 size-[30px] rounded-full bg-white/50" />
        </div>
      </div>
    </div>
  )
}

export default CreditCard
