interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
}

const Hamburger = ({ isOpen, onClick }: HamburgerProps) => {
  return (
    <button
      name="hamburger"
      aria-label="Hamburger"
      aria-expanded={isOpen}
      aria-controls="sidebar"
      className="flex flex-col justify-center items-center w-[18px] h-[14px] focus:outline-none"
      onClick={onClick}
    >
      <span
        className={`w-[18px] h-[2px] bg-gray-600 rounded-full transform transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45 translate-y-[6px]" : ""
        }`}
      />
      <span
        className={`w-[18px] h-[2px] bg-gray-600 rounded-full transition-all duration-300 ease-in-out mt-[4px] ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`w-[18px] h-[2px] bg-gray-600 rounded-full transform transition-all duration-300 ease-in-out mt-[4px] ${
          isOpen ? "-rotate-45 -translate-y-[6px]" : ""
        }`}
      />
    </button>
  );
};

export default Hamburger;
