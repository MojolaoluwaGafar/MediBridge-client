import { z } from "zod";

export const registerSchema = z.object({
  UserId: z.string().min(1, "UserId is required"),
  Email: z.string().email("Invalid email address"),
  RegisteredNumber: z.string().min(1, "Registered number is required"),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const verifyCodeSchema = z.object({
  code: z
    .string()
    .length(6, "Code must be exactly 6 digits")
    .regex(/^\d+$/, "Code must contain only numbers"),
});

export type VerifyCodeInput = z.infer<typeof verifyCodeSchema>;

export const setPasswordSchema = z.object({
  newPassword: z.string()
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, {
    message: "You must agree to the Terms and Privacy Policy",
  }),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type SetPasswordInput = z.infer<typeof setPasswordSchema>;


export const loginSchema = z.object({
    userId : z.string().min(1, "User ID is required"),
    password : z.string().min(1, "Password is required")
})

export type loginValues = z.infer<typeof loginSchema>;
