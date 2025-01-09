import { PreferencesIllustration } from "@/assets"

const Preferences = () => {
  return (
    <div className="flex items-center justify-center h-full w-full pt-[100px]">
      <img
        loading="lazy"
        src={PreferencesIllustration}
        alt="Preferences"
        className="w-[500px] aspect-auto"
      />
    </div>
  )
}

export default Preferences
