type CustomButtonProps = {
  buttonType?: "button" | "submit" | "reset"
  buttonText: string
  extraClasses?: string
  onClick?: () => void
  disabled?: boolean
  icon?: React.ReactNode
}

const CustomButton = ({
  buttonType = "button",
  buttonText,
  extraClasses = "",
  onClick,
  icon,
  disabled,
}: CustomButtonProps) => {
  return (
    <button
      type={buttonType}
      className={`${extraClasses} h-[50px] flex items-center gap-[11px] disabled:cursor-not-allowed hover:opacity-80 disabled:opacity-80 duration-300 transition-opacity bg-active-link text-white rounded-[50px] px-6 py-[11px]`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText} {icon}
    </button>
  )
}

export default CustomButton
