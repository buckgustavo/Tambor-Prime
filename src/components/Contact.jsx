import { Phone } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { InstagramIcon } from './InstagramIcon'

const WA_LINK = 'https://wa.me/5516991019366'

export function Contact() {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-inner reveal">
        <span className="section-eyebrow">Fale Conosco</span>
        <h2 className="section-title">
          Reserve o <span className="accent">Seu</span>
        </h2>
        <div className="divider" />

        <p className="contact-lead">
          Entre em contato pelo WhatsApp agora mesmo e garanta seu Tambor Prime
          Grill. Atendimento rápido para venda ou aluguel — para o próximo
          churrasco não ter desculpa.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn-large"
        >
          <WhatsAppIcon size={26} />
          Chamar no WhatsApp — (16) 99101-9366
        </a>

        <div className="contact-meta">
          <div className="contact-meta-item">
            <Phone size={16} />
            (16) 99101-9366
          </div>
          <div className="contact-meta-item">
            <InstagramIcon size={16} />
            @tamborprimegrill
          </div>
        </div>
      </div>
    </section>
  )
}
