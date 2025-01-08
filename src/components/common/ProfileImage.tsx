import { useEffect, useState } from "react"

interface ProfileImageProps {
  src?: string | null
  alt?: string
  className?: string
  name?: string
  isLoading?: boolean
}

const ProfileImage = ({
  src,
  alt = "profile picture",
  className = "",
  name = "",
  isLoading = false,
}: ProfileImageProps) => {
  const [imageError, setImageError] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const sizeClasses = {
    sm: "size-[35px] text-sm",
    lg: "size-[60px] text-xl",
  }

  const getImageSizeClass = sizeClasses[isLargeScreen ? "lg" : "sm"]

  const getInitials = () => {
    const names = name.split(" ")
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase()
    }
    return (names[0]?.[0] || "U").toUpperCase()
  }

  // Skeleton Loading
  if (isLoading) {
    return (
      <div
        className={`
          ${getImageSizeClass} 
          rounded-full 
          bg-gray-200 
          animate-pulse
          ${className}
        `}
      />
    )
  }

  if (!src || imageError) {
    return (
      <div
        className={`
          ${getImageSizeClass} 
          bg-soft-blue 
          rounded-full 
          flex 
          items-center 
          justify-center 
          text-white 
          font-medium
          ${className}
        `}
      >
        {getInitials()}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setImageError(true)}
      className={`${getImageSizeClass} bg-soft-blue rounded-full object-cover cursor-pointer ${className}`}
    />
  )
}

export default ProfileImage
