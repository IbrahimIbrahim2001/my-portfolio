import z from "zod";

export const contactFormSchema = z.object({
    user_name: z.string().min(2).max(50),
    user_email: z.email(),
    message: z.string().min(2).max(200)
})

export type contactFormType = z.infer<typeof contactFormSchema>