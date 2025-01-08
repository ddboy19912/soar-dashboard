import { useUserData } from "@/hooks/useUserData"
import { Link } from "react-router-dom"
import CustomInput from "../common/CustomInput"
import ProfileImage from "../common/ProfileImage"
import Icon from "../Icon"
import Hamburger from "./Hamburger"

interface NavbarProps {
  isSidebarOpen: boolean
  onMenuClick: () => void
}

const Navbar = ({ isSidebarOpen, onMenuClick }: NavbarProps) => {
  const { data: userData, isLoading } = useUserData()

  return (
    <div className="bg-white border-b border-primary-border px-[25px] pt-[25px] pb-5 xl:py-5 xl:px-10 flex flex-col xl:flex-row">
      <div className="flex items-center justify-between w-full">
        <div className="chromebook:hidden">
          <Hamburger isOpen={isSidebarOpen} onClick={onMenuClick} />
        </div>
        <h1 className="text-accent-blue">Overview</h1>
        <div className="flex items-center gap-[35px]">
          <div className="hidden chromebook:flex items-center gap-[30px]">
            <CustomInput
              inputType="search"
              placeholderText="Search for something"
            />
            <Link to="/settings">
              <div className="rounded-full bg-input-background size-[50px] flex items-center justify-center group cursor-pointer">
                <Icon
                  icon="cog"
                  size={25}
                  className="!fill-soft-blue group-hover:!fill-hover-blue"
                />
              </div>
            </Link>

            <div className="rounded-full bg-input-background size-[50px] flex items-center justify-center group cursor-pointer">
              <Icon
                icon="notification"
                size={25}
                className="!fill-soft-blue group-hover:!fill-hover-blue"
              />
            </div>
          </div>
          <Link to="/settings">
            <ProfileImage
              src={userData?.profilePicture}
              name={userData?.name}
              isLoading={isLoading}
            />
          </Link>
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
