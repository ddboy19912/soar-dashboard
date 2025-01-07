import { DummyImage } from "@/assets"
import { useState } from "react"
import CustomInput from "../common/CustomInput"
import Icon from "../Icon"
import Hamburger from "./Hamburger"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="bg-white border-b border-primary-border px-[25px] pt-[25px] pb-5 xl:py-5 xl:px-10 flex flex-col xl:flex-row">
      <div className="flex items-center justify-between w-full">
        <div className="chromebook:hidden">
          <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <h1 className="text-accent-blue">Overview</h1>
        <div className="flex items-center gap-[35px]">
          <div className="hidden chromebook:flex items-center gap-[30px]">
            <CustomInput
              inputType="search"
              placeholderText="Search for something"
            />
            <div className="rounded-full bg-input-background size-[50px] flex items-center justify-center group cursor-pointer">
              <Icon
                icon="cog"
                size={25}
                className="!fill-soft-blue group-hover:!fill-hover-blue"
              />
            </div>
            <div className="rounded-full bg-input-background size-[50px] flex items-center justify-center group cursor-pointer">
              <Icon
                icon="notification"
                size={25}
                className="!fill-soft-blue group-hover:!fill-hover-blue"
              />
            </div>
          </div>
          <div>
            <img
              src={DummyImage}
              alt="profile-picture"
              className="size-[35px] xl:size-[60px] rounded-full object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
      <CustomInput
        extraClasses="mt-5 chromebook:hidden"
        inputType="search"
        placeholderText="Search for something"
      />
    </div>
  )
}

export default Navbar
