import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { contactSchema } from "@/lib/contact-schema"

const rateLimit = new Map()

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown"

    const now = Date.now()
    const lastRequest = rateLimit.get(ip)

    if (lastRequest && now - lastRequest < 10000) {
      return NextResponse.json(
        { error: "Muitas tentativas. Aguarde." },
        { status: 429 }
      )
    }

    rateLimit.set(ip, now)

    const body = await req.json()

    if (body.website) {
      return NextResponse.json({ success: true }) // honeypot
    }

    const data = contactSchema.parse(body)

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"ZAION Site" <${process.env.EMAIL_USER}>`,
      to: "geral@zaion.co.ao",
      subject: "Novo contacto do site",
      html: `
        <h2>Novo contacto</h2>
        <p><strong>Nome:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Empresa:</strong> ${data.company}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.phone}</p>
        <p><strong>Mensagem:</strong><br/> ${data.message}</p>
      `,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao enviar." },
      { status: 400 }
    )
  }
}
