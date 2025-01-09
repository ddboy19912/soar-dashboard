import { useState } from "react"

interface ProfileImageProps {
  src?: string | null
  alt?: string
  className?: string
  name?: string
  isLoading?: boolean
  size?: number
}

const ProfileImage = ({
  src,
  alt = "profile picture",
  className = "",
  name = "",
  isLoading = false,
  size = 60,
}: ProfileImageProps) => {
  const [imageError, setImageError] = useState(false)

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
          rounded-full 
          bg-gray-200 
          animate-pulse
          ${className}
        `}
        style={{ width: size, height: size }}
      />
    )
  }

  if (!src || imageError) {
    return (
      <div
        className={`
          bg-soft-blue 
          rounded-full 
          flex 
          items-center 
          justify-center 
          text-white 
          font-medium
          ${className}
        `}
        style={{ width: size, height: size }}
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
      className={`bg-soft-blue rounded-full object-cover cursor-pointer ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

export default ProfileImage
