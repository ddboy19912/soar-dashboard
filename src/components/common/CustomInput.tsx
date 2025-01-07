import Icon from "../Icon"

interface CustomInputProps {
  inputType: "text" | "number" | "email" | "password" | "search"
  placeholderText: string
  extraClasses?: string
}

const CustomInput = ({
  inputType = "text",
  placeholderText,
  extraClasses = "",
}: CustomInputProps) => {
  return (
    <div
      className={`flex items-center gap-[15px] rounded-[40px] overflow-hidden bg-input-background h-10 chromebook:h-[50px] px-[25px] ${extraClasses}`}
    >
      {inputType === "search" ? (
        <Icon icon="search" size={20} className="!fill-soft-blue" />
      ) : null}
      <input
        type={inputType}
        className="w-full bg-transparent h-full outline-none focus:outline-none focus:ring-0 focus:border-none hover:outline-none hover:border-none placeholder:text-[15px] text-[15px] placeholder:text-placeholder-text text-soft-blue [&::-webkit-search-cancel-button]:appearance-none"
        placeholder={placeholderText}
      />
    </div>
  )
}

export default CustomInput
