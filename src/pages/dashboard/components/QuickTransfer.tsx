import CustomButton from "@/components/common/CustomButton"
import CustomCard from "@/components/common/CustomCard"
import CustomInput from "@/components/common/CustomInput"
import ProfileImage from "@/components/common/ProfileImage"
import Icon from "@/components/Icon"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { useMyContacts } from "@/hooks/useMyContacts"
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react"

interface TransferConfirmation {
  isOpen: boolean
  amount: string
  recipient: string | null
}

const QuickTransfer = () => {
  const { data: contacts, isLoading } = useMyContacts()

  const [api, setApi] = useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [amount, setAmount] = useState("")
  const { toast } = useToast()
  const [confirmation, setConfirmation] = useState<TransferConfirmation>({
    isOpen: false,
    amount: "",
    recipient: null,
  })

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap())
    })
  }, [api])

  const handleNext = useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handlePrev = useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const handleItemClick = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api]
  )

  const isActiveSlide = useCallback(
    (index: number) => {
      return activeIndex === index
    },
    [activeIndex]
  )

  const cantSendMoney = useMemo(
    () => amount === "0" || !amount || !contacts?.[activeIndex],
    [amount, activeIndex, contacts]
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (cantSendMoney) {
      toast({
        variant: "destructive",
        title: "Invalid Transfer",
        description: "Please enter an amount to send",
      })
      return
    }

    const selectedContact = contacts?.[activeIndex]
    setConfirmation({
      isOpen: true,
      amount,
      recipient: selectedContact?.name ?? null,
    })

    setAmount("")
  }

  return (
    <div className="relative">
      <h2 className="text-accent-blue">Quick Transfer</h2>
      <CustomCard
        containerClass="w-[445px] h-[280px] mt-5"
        contentClass="px-[25px] pt-[35px] pb-[40px]"
      >
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="min-h-[139px]"
        >
          <CarouselContent className="mt-1">
            {contacts?.map((contact, index) => (
              <CarouselItem
                key={contact.id}
                className="flex flex-col items-center basis-1/3 cursor-pointer"
                onClick={() => handleItemClick(index)}
              >
                <div
                  className={`
                    relative rounded-full
                    ${isActiveSlide(index) ? "ring-2 ring-yellow-500 ring-offset-2" : ""}
                  `}
                >
                  <ProfileImage
                    src={contact.profilePicture}
                    isLoading={isLoading}
                    alt={contact.name}
                  />
                </div>
                <p
                  className={`
                    text-base leading-[1.2] font-normal mt-[15px] text-active-link w-max transition-colors duration-300
                    ${isActiveSlide(index) ? "font-bold" : "font-normal"}
                  `}
                >
                  {contact.name}
                </p>
                <p
                  className={`
                    text-[15px] leading-[1.2] font-normal mt-[5px] text-center transition-colors duration-300 text-soft-blue
                     ${isActiveSlide(index) ? "font-bold" : "font-normal"}
                  `}
                >
                  {contact.occupation}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <button
          onClick={handlePrev}
          className="size-[50px] border border-soft-blue/25 absolute left-[-20px] top-[110px] group flex items-center justify-center rounded-full bg-white shadow-[4px_4px_18px_-2px_rgba(231,228,232,0.8)] hover:bg-soft-blue duration-300 transition-all"
        >
          <Icon
            icon="keyboard_arrow_right"
            size={25}
            className="text-soft-blue group-hover:text-white duration-300 transition-all cursor-pointer rotate-180"
          />
        </button>
        <button
          onClick={handleNext}
          className="size-[50px] border border-soft-blue/25 absolute right-[-20px] top-[110px] group flex items-center justify-center rounded-full bg-white shadow-[4px_4px_18px_-2px_rgba(231,228,232,0.8)] hover:bg-soft-blue duration-300 transition-all"
        >
          <Icon
            icon="keyboard_arrow_right"
            size={25}
            className="text-soft-blue group-hover:text-white duration-300 transition-all cursor-pointer"
          />
        </button>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-between mt-[29px]"
        >
          <p className="text-base leading-[1.2] font-normal text-soft-blue">
            Write Amount
          </p>
          <div className="flex items-center relative w-[265px]">
            <div className="w-[163px]">
              <CustomInput
                inputType="number"
                placeholderText="$525.00"
                roundedRight={false}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                name="amount"
              />
            </div>
            <CustomButton
              buttonText="Send"
              extraClasses="absolute right-0"
              icon={<Icon icon="plane" size={26} />}
              buttonType="submit"
            />
          </div>
        </form>
      </CustomCard>

      <Dialog
        open={confirmation.isOpen}
        onOpenChange={(open) =>
          setConfirmation((prev) => ({ ...prev, isOpen: open }))
        }
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-semibold">
              Transfer Successful! 🎉
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="text-soft-blue mb-2">You have sent</p>
            <p className="text-2xl font-bold text-accent-blue mb-2">
              ${parseFloat(confirmation.amount).toLocaleString()}
            </p>
            <p className="text-soft-blue">
              to{" "}
              <span className="font-medium text-accent-blue">
                {confirmation.recipient}
              </span>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default QuickTransfer
