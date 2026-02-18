import { Phone, Linkedin, Instagram, Facebook, MapPin } from "lucide-react"
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

export default function ContactForm() {
  return (
    <section className="w-full">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

        {/* ================= INFORMAÇÕES ================= */}
        <div className="w-full lg:w-1/2 space-y-8">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Fale com nossa equipa
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Desenvolvemos sites, plataformas, sistemas inteligentes e soluções com IA,
              fazemos estudo de viabilidade, contabilidade e muito mais, tudo para
              impulsionar o crescimento do seu negócio.
            </p>
          </div>

          {/* Card Contato */}
          <div className="bg-gradient-to-br from-[#0B1F3B] to-[#1E3A8A] text-white rounded-3xl p-8 shadow-2xl space-y-6">

            {/* Telefone */}
            <div>
              <p className="text-sm text-white/70 mb-2">Telefone</p>
              <a
                href="tel:+244941178851"
                className="flex items-center gap-3 text-lg font-medium hover:opacity-80 transition"
              >
                <Phone size={18} />
                +244 941 178 851
              </a>
            </div>

            {/* WhatsApp */}
            <div>
              <p className="text-sm text-white/70 mb-2">WhatsApp</p>
              <a
                href="https://wa.me/244941178851"
                target="_blank"
                className="text-lg font-medium hover:opacity-80 transition"
              >
                Conversar agora
              </a>
            </div>

            {/* Redes sociais */}
            <div>
              <p className="text-sm text-white/70 mb-3">
                Redes Sociais
              </p>

              <div className="flex gap-5">
                <Linkedin className="cursor-pointer hover:scale-110 transition-transform" />
                <Instagram className="cursor-pointer hover:scale-110 transition-transform" />
                <Facebook className="cursor-pointer hover:scale-110 transition-transform" />
              </div>
            </div>

            {/* MAPA */}
            <div className="space-y-3">
              <p className="text-sm text-white/70 flex items-center gap-2">
                <MapPin size={16} />
                Localização
              </p>

              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=nossa+senhora+do+monte+lubango+huila&output=embed"
                  width="100%"
                  height="220"
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>

          </div>

        </div>

        {/* ================= FORMULÁRIO ================= */}
        <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-2xl p-10">

          <form className="space-y-6">

            <FieldGroup>

              <FieldSet>
                <FieldGroup>

                  <Field className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <FieldLabel htmlFor="firstName">
                        Primeiro Nome
                      </FieldLabel>
                      <Input id="firstName" required />
                    </div>

                    <div>
                      <FieldLabel htmlFor="lastName">
                        Sobrenome
                      </FieldLabel>
                      <Input id="lastName" required />
                    </div>
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="company">
                      Empresa
                    </FieldLabel>
                    <Input id="company" />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">
                      Email Profissional
                    </FieldLabel>
                    <Input id="email" type="email" required />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="phone">
                      Telefone
                    </FieldLabel>
                    <Input id="phone" type="tel" />
                  </Field>

                </FieldGroup>
              </FieldSet>

              <FieldSeparator />

              <FieldSet>
                <FieldLegend>Mensagem</FieldLegend>
                <Field>
                  <Textarea
                    id="message"
                    rows={5}
                    className="resize-none"
                    placeholder="Conte-nos sobre seu projeto"
                  />
                </Field>
              </FieldSet>

              <Field orientation="horizontal" className="gap-3">
                <Checkbox id="newsletter" required />
                <FieldLabel htmlFor="newsletter" className="font-normal">
                  Concordo com a política de privacidade
                </FieldLabel>
              </Field>

              <Button
                type="submit"
                className="
                  w-full
                  bg-[#C6A75E]
                  text-[#0B1F3B]
                  hover:bg-[#0B1F3B]
                  hover:text-white
                  transition-all
                  duration-300
                  py-4
                  rounded-xl
                  font-semibold
                  text-base
                "
              >
                Enviar Mensagem
              </Button>

            </FieldGroup>

          </form>

        </div>

      </div>
    </section>
  )
}
