import { z } from "zod"

export const contactSchema = z.object({
  firstName: z.string().min(2, "Nome inválido"),
  lastName: z.string().min(2, "Sobrenome inválido"),
  company: z.string().min(2, "Empresa obrigatória"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(6, "Telefone inválido"),
  message: z.string().min(10, "Mensagem muito curta"),
  newsletter: z.boolean().refine(val => val === true, {
    message: "Você precisa aceitar a política"
  }),
  website: z.string().max(0).optional() // honeypot
})

export type ContactFormData = z.infer<typeof contactSchema>
