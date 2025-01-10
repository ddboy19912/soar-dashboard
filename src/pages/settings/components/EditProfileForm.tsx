import ProfileImage from "@/components/common/ProfileImage"
import Icon from "@/components/Icon"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/hooks/use-toast"
import { useImageUpload } from "@/hooks/useImageUpload"
import { useUpdateUser } from "@/hooks/useUpdateUser"
import { useUserData } from "@/hooks/useUserData"
import { cn, encryptPassword } from "@/lib/utils"
import { profileFormSchema } from "@/lib/validations"
import { useScreenSize } from "@/store/useScreenStore"
import { useUserStore } from "@/store/useUserStore"
import { User } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { ChevronDown } from "lucide-react"
import { ChangeEvent, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const getFormValues = (userData?: User) => ({
  name: userData?.name || "",
  username: userData?.username || "",
  email: userData?.email || "",
  password: "",
  dob: userData?.dob ? new Date(userData?.dob) : new Date(),
  presentAddress: userData?.presentAddress || "",
  permanentAddress: userData?.permanentAddress || "",
  city: userData?.city || "",
  postalCode: userData?.postalCode || "",
  country: userData?.country || "",
})

const EditProfileForm = () => {
  const { getUserId } = useUserStore()
  const userId = getUserId()
  const isLargeScreen = useScreenSize()

  const { data: userData, refetch } = useUserData(userId)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const {
    selectedImage,
    imagePreview,
    handleImageSelect,
    convertToBase64,
    resetImage,
  } = useImageUpload()

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: getFormValues(userData),
  })

  const { updateUser, isPending } = useUpdateUser(userData?.id)

  useEffect(() => {
    if (userData) {
      form.reset(getFormValues(userData))
    }
  }, [userData, form])

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleImageSelect(file)
    }
  }

  const onSubmit = async (values: z.infer<typeof profileFormSchema>) => {
    try {
      let profilePicture = userData?.profilePicture

      if (selectedImage) {
        profilePicture = await convertToBase64(selectedImage)
      }

      const { password, ...restValues } = values

      const updatedValues = {
        ...restValues,
        dob: values.dob.toISOString(),
        profilePicture,
        ...(password
          ? {
              password: await encryptPassword(password),
            }
          : {
              password: userData.password,
            }),
      }

      await updateUser(updatedValues)
      resetImage()

      toast({
        title: "Success",
        description: "Profile updated successfully",
      })

      setTimeout(() => {
        refetch()
      }, 1000)
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update profile",
      })
    }
  }

  const formLabelClasses = "text-base font-normal text-active-link"
  const inputClasses =
    "border border-card-border rounded-[15px] h-[50px] py-4 px-5 text-[15px] font-normal text-active-link placeholder:text-[15px] placeholder:font-normal placeholder:text-soft-blue"

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col chromebook:flex-row items-center chromebook:items-start px-0 chromebook:px-[30px] pt-[45px] chromebook:pt-[41px] gap-[22px] chromebook:gap-[57px]">
          <div
            className="relative min-w-[100px] chromebook:min-w-[90px] w-max h-max cursor-pointer z-[1] group"
            onClick={handleImageClick}
          >
            <ProfileImage
              src={imagePreview || userData?.profilePicture}
              alt={userData?.name}
              size={isLargeScreen ? 90 : 100}
            />
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFileChange}
            />
            <div
              className={cn(
                "absolute bottom-0 right-0 size-[30px] bg-active-link rounded-full flex items-center justify-center",
                isPending && "animate-pulse"
              )}
            >
              <Icon
                icon="pencil"
                size={15}
                className={cn(isPending && "animate-spin")}
              />
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-[-1] bg-soft-blue/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-x-[30px] gap-y-4 chromebook:gap-y-[22px] w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className={formLabelClasses}>Your Name</FormLabel>
                  <FormControl>
                    <Input
                      className={inputClasses}
                      placeholder="Charlene Reed"
                      {...field}
                      autoComplete="name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className={formLabelClasses}>User Name</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="username"
                      className={inputClasses}
                      placeholder="charlenereed"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className={formLabelClasses}>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className={inputClasses}
                      placeholder="charlenereed@gmail.com"
                      {...field}
                      autoComplete="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className={formLabelClasses}>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="current-password"
                      className={inputClasses}
                      placeholder="********"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className={formLabelClasses}>
                    Date of Birth
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            `flex w-full text-left ${inputClasses}`,
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "d MMMM yyyy")
                          ) : (
                            <span>25 January 1990</span>
                          )}
                          <ChevronDown
                            className="ml-auto text-soft-blue"
                            strokeWidth={1.5}
                          />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date: Date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="presentAddress"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className={formLabelClasses}>
                    Present Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={inputClasses}
                      placeholder="San Jose, California, USA"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="permanentAddress"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className={formLabelClasses}>
                    Permanent Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={inputClasses}
                      placeholder="San Jose, California, USA"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className={formLabelClasses}>City</FormLabel>
                  <FormControl>
                    <Input
                      className={inputClasses}
                      placeholder="San Jose"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className={formLabelClasses}>
                    Postal Code
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={inputClasses}
                      placeholder="45962"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className={formLabelClasses}>Country</FormLabel>
                  <FormControl>
                    <Input
                      className={inputClasses}
                      placeholder="USA"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2 flex justify-end w-full">
              <Button
                type="submit"
                className="w-full lg:w-max mt-[19px] px-[74px] py-[14px] rounded-[15px] font-medium text-[15px] chromebook:text-lg leading-[1.2] text-white h-[50px]"
                disabled={isPending}
              >
                {isPending ? "Updating..." : "Save"}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}

export default EditProfileForm
