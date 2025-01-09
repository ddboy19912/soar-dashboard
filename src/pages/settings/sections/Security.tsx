import { SecurityIllustration } from "@/assets"

const Security = () => {
  return (
    <div className="flex items-center justify-center h-full w-full pt-[100px]">
      <img
        loading="lazy"
        src={SecurityIllustration}
        alt="Security"
        className="w-[500px] aspect-auto"
      />
    </div>
  )
}

export default Security
