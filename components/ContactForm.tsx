import { Phone, Linkedin, Instagram, Facebook } from "lucide-react"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "./ui/field"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button"
import PagConst from "./pagconst"

export default function ContactSection() {
  return (
    
    <section className="w-full pt-12 px-6">
    <PagConst
    title="Contatos"
    text="Converse com nossa equipe por esse canais de atendimento."
    />
    
      <div className="max-w-7xl pt-12 pb-12 mx-auto flex flex-col lg:flex-row items-start justify-between gap-16">

        {/* ================= ESQUERDA ================= */}
        <div className="w-full lg:w-1/2">
          <div className="bg-[#C6A75E] rounded-3xl p-10 shadow-lg">

            <h2 className="text-2xl font-semibold mb-6">
              Entre em contato
            </h2>

            <p className="mb-6">
              Nosso time está pronto para atender
            </p>

             <a
            href="tel:+244900000000"
            className="flex items-center mb-6 gap-2 hover:scale-105 transition-transform"
          >
            <Phone size={16} />
            <span>+244 900 000 000</span>
          </a>

          <a
            href="https://wa.me/244900000000"
            target="_blank"
            className="flex mb-6 items-center gap-2 hover:scale-105 transition-transform"
          >
            <span className="font-medium">WhatsApp</span>
          </a>

            <p className="mb-4 font-medium">
              Nos siga nas redes sociais
            </p>

            <div className="flex gap-5">
              <Linkedin size={22} className="cursor-pointer hover:scale-110 transition-transform" />
              <Instagram size={22} className="cursor-pointer hover:scale-110 transition-transform" />
              <Facebook size={22} className="cursor-pointer hover:scale-110 transition-transform" />
            </div>

          </div>
        </div>

        {/* ================= DIREITA ================= */}
        <div className="w-full lg:w-1/2">
          <form className="w-full max-w-xl lg:ml-auto">

            <FieldGroup>

              <FieldSet>
                <FieldGroup>

                  {/* Nome e Sobrenome */}
                  <Field className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="flex flex-col">
                      <FieldLabel htmlFor="firstName">
                        Primeiro Nome
                      </FieldLabel>
                      <Input
                        id="firstName"
                        placeholder="Nome"
                        required
                      />
                    </div>

                    <div className="flex flex-col">
                      <FieldLabel htmlFor="lastName">
                        Sobrenome
                      </FieldLabel>
                      <Input
                        id="lastName"
                        placeholder="Sobrenome"
                        required
                      />
                    </div>

                  </Field>

                  {/* Empresa */}
                  <Field>
                    <FieldLabel htmlFor="company">
                      Nome da Empresa
                    </FieldLabel>
                    <Input
                      id="company"
                      placeholder="Digite o nome da empresa"
                      required
                    />
                  </Field>

                  {/* Email */}
                  <Field>
                    <FieldLabel htmlFor="email">
                      Email
                    </FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite seu Email"
                      required
                    />
                  </Field>

                  {/* Telefone */}
                  <Field>
                    <FieldLabel htmlFor="phone">
                      Número de telefone
                    </FieldLabel>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Digite o número de telefone"
                      required
                    />
                  </Field>

                </FieldGroup>
              </FieldSet>

              <FieldSeparator />

              {/* Mensagem */}
              <FieldSet>
                <FieldLegend>Mensagem</FieldLegend>
                <Field>
                  <Textarea
                    id="message"
                    placeholder="Escreva sua mensagem"
                    className="resize-none"
                  />
                </Field>
              </FieldSet>

              {/* Checkbox */}
              <Field orientation="horizontal" className="gap-3">
                <Checkbox id="newsletter" required />
                <FieldLabel
                  htmlFor="newsletter"
                  className="font-normal"
                >
                  Eu gostaria de receber emails da Zaion e concordo com a política de privacidade
                </FieldLabel>
              </Field>

              {/* Botões */}
              <Field orientation="horizontal" className="gap-4 pt-4">
                <Button
                  type="submit"
                  className="bg-[#C6A75E] hover:bg-[#0B1F3B] hover:text-white transition-colors"
                >
                  Enviar
                </Button>

                <Button
                  variant="outline"
                  type="button"
                  className="hover:bg-[#0B1F3B] hover:text-white transition-colors"
                >
                  Cancelar
                </Button>
              </Field>

            </FieldGroup>

          </form>
        </div>

      </div>
    </section>
  )
}
