import { WhatsAppIcon } from './WhatsAppIcon'
import { InstagramIcon } from './InstagramIcon'

const WA_LINK = 'https://wa.me/5516991019366'

export function Footer() {
  return (
    <footer className="footer">
      <span className="footer-brand">Tambor Prime × Brasa Alta</span>

      <p className="footer-copy">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </p>

      <div className="footer-social">
        <a
          href="https://www.instagram.com/tamborprimegrill"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon size={20} />
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon size={20} />
        </a>
      </div>
    </footer>
  )
}
