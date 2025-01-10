import { ChipIllustration } from "@/assets";
import { formatCardNumber } from "@/lib/card";
import { formatBalance } from "@/lib/helpers";

interface CreditCardProps {
  balance: number;
  holderName: string;
  validThru: string;
  cardNumber: string;
  cardColor: "dark" | "light";
  isLoading?: boolean;
}

const CreditCard = ({
  balance,
  holderName,
  validThru,
  cardNumber,
  cardColor = "dark",
  isLoading = true,
}: CreditCardProps) => {
  const cardColorClass = cardColor === "dark" ? "bg-card-gradient" : "bg-white";
  const textColorClass =
    cardColor === "dark" ? "text-white" : "text-accent-blue";
  const fadeTextColorClass =
    cardColor === "dark" ? "text-white/70" : "text-soft-blue";
  const cardBorderClass =
    cardColor === "dark" ? "border-transparent" : "border border-card-border";
  const chipFilter = cardColor === "light" ? "invert" : "";

  if (isLoading) {
    return (
      <div
        className={`rounded-[15px] chromebook:rounded-[25px] ${cardColorClass} ${cardBorderClass} w-[265px] h-[172px] chromebook:w-[350px] chromebook:h-[235px] overflow-hidden relative`}
      >
        <div className="absolute inset-0 translate-x-[-100%] animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    );
  }

  return (
    <div
      className={`rounded-[15px] chromebook:rounded-[25px] ${cardColorClass} ${textColorClass} w-[265px] h-[172px] chromebook:w-[350px] chromebook:h-[235px] overflow-hidden px-5 pb-[16.59px] pt-[17px] chromebook:pb-5 chromebook:pt-6 chromebook:px-[25px] relative ${cardBorderClass}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p
            className={`small-text font-lato ${cardColor === "light" ? "text-soft-blue" : ""}`}
          >
            Balance
          </p>
          <p className="text-[16px] chromebook:text-[20px] leading-6 font-semibold font-lato">
            ${formatBalance(balance)}
          </p>
        </div>
        <img
          className={`size-[29px] chromebook:size-[34.77px] object-contain ${chipFilter}`}
          loading="lazy"
          src={ChipIllustration}
          alt="chip"
        />
      </div>
      <div className="flex items-center gap-[57px] chromebook:gap-[67px] mt-[23px] chromebook:mt-[33px]">
        <div className="flex flex-col">
          <p
            className={`text-[10px] chromebook:text-[12px] leading-[1.2] font-normal ${fadeTextColorClass} uppercase font-lato`}
          >
            Card Holder
          </p>
          <p className="text-[13px] chromebook:text-[15px] leading-[1.2] mt-[2px] font-semibold font-lato">
            {holderName}
          </p>
        </div>
        <div className="flex flex-col">
          <p
            className={`text-[10px] chromebook:text-[12px] leading-[1.2] font-normal ${fadeTextColorClass} uppercase font-lato`}
          >
            Valid Thru
          </p>
          <p className="text-[13px] chromebook:text-[15px] leading-[1.2] mt-[2px] font-semibold font-lato">
            {validThru}
          </p>
        </div>
      </div>
      <div
        className={`card-footer bg-card-bottom-gradient flex items-center justify-between absolute bottom-0 left-0 w-full h-[51px] chromebook:h-[70px] px-[25px] border-t ${cardBorderClass}`}
      >
        <h2 className="font-lato text-[15px] chromebook:text-[22px] leading-[1.2] font-semibold">
          {formatCardNumber(cardNumber)}
        </h2>
        <div className="relative w-[44px] h-[30px]">
          <div className="absolute size-[30px] rounded-full bg-white/50" />
          <div className="absolute left-4 size-[30px] rounded-full bg-white/50" />
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
