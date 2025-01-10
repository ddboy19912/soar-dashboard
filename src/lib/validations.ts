import { z } from "zod";

export const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .optional()
    .or(z.literal("")),
  dob: z.date({
    required_error: "Please select your date of birth",
    message: "Please select your date of birth",
  }),
  presentAddress: z.string().min(2, {
    message: "Present address must be at least 2 characters.",
  }),
  permanentAddress: z.string().min(2, {
    message: "Permanent address must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  postalCode: z.string().length(5, {
    message: "This is not a valid postal code.",
  }),
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
});
