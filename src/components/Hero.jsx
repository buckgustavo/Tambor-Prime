import { Flame, ChevronDown } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { asset } from '../utils/asset'

const WA_LINK = 'https://wa.me/5516991019366'

export function Hero() {
  return (
    <section className="hero" id="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={asset('assets/hero.mp4')} type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-eyebrow">
          <Flame size={14} />
          Churrasco de Verdade
        </span>

        <h1 className="hero-title">
          Transforme seu<br />
          <span className="accent">Final de Semana</span>
        </h1>

        <p className="hero-sub">
          Sabor que penetra até o centro. Carne macia, suculenta e soltando
          caldo. Reserve o seu Tambor Prime Grill.
        </p>

        <div className="hero-buttons">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <WhatsAppIcon size={20} />
            Reservar Agora
          </a>
          <a href="#produto" className="btn btn-ghost">
            Conhecer o Produto
          </a>
        </div>
      </div>

      <a href="#produto" className="hero-scroll" aria-label="Rolar para baixo">
        <span>Rolar</span>
        <ChevronDown size={18} />
      </a>
    </section>
  )
}
