import { useUserData } from "@/hooks/useUserData"
import { useScreenSize } from "@/store/useScreenStore"
import { useUserStore } from "@/store/useUserStore"
import { Link, useLocation } from "react-router-dom"
import CustomInput from "../common/CustomInput"
import ProfileImage from "../common/ProfileImage"
import Icon from "../Icon"
import Hamburger from "./Hamburger"

interface NavbarProps {
  isSidebarOpen: boolean
  onMenuClick: () => void
}

const Navbar = ({ isSidebarOpen, onMenuClick }: NavbarProps) => {
  const { getUserId } = useUserStore()
  const userId = getUserId()

  const { data: userData, isLoading } = useUserData(userId)

  const pathname = useLocation().pathname

  const getPageName = () => {
    if (pathname === "/") {
      return "Overview"
    }

    const pageName = pathname.split("/").pop() || ""
    return pageName.replace(/-/g, " ")
  }

  const isLargeScreen = useScreenSize()

  const profileImageSize = isLargeScreen ? 60 : 35

  return (
    <div className="fixed z-20 w-screen chromebook:w-screen-minus-sidebar bg-white border-b border-transparent chromebook:border-primary-border px-[25px] pt-[25px] pb-5 xl:py-5 xl:px-10 flex flex-col xl:flex-row">
      <div className="flex items-center justify-between w-full chromebook:max-w-[1110px]">
        <div className="chromebook:hidden">
          <Hamburger isOpen={isSidebarOpen} onClick={onMenuClick} />
        </div>
        <h1 className="text-accent-blue capitalize">{getPageName()}</h1>
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
          <Link to="/settings" className="group relative">
            <ProfileImage
              src={userData?.profilePicture}
              name={userData?.name}
              isLoading={isLoading}
              size={profileImageSize}
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-[-1] bg-soft-blue/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
