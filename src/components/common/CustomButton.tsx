type CustomButtonProps = {
  buttonType?: "button" | "submit" | "reset";
  buttonText: string | React.ReactNode;
  extraClasses?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  height?: number;
};

const CustomButton = ({
  buttonType = "button",
  buttonText,
  extraClasses = "",
  onClick,
  icon,
  disabled,
  height = 50,
}: CustomButtonProps) => {
  return (
    <button
      type={buttonType}
      className={`${extraClasses} flex items-center font-medium text-[13px] chromebook:text-base gap-[9px] chromebook:gap-[11px] disabled:cursor-not-allowed hover:opacity-80 disabled:opacity-80 duration-300 transition-opacity bg-active-link text-white rounded-[50px] px-[21px] chromebook:px-6 py-3 chromebook:py-[11px]`}
      onClick={onClick}
      disabled={disabled}
      style={{
        height: height,
      }}
    >
      {buttonText} {icon}
    </button>
  );
};

export default CustomButton;
