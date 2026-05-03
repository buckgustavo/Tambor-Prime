import { Beef, Timer, UtensilsCrossed, Tag, CalendarDays } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'

const WA_LINK = 'https://wa.me/5516991019366'

const features = [
  {
    icon: <Beef size={22} />,
    title: 'Carne Macia & Suculenta',
    desc: 'O bafo faz a diferença — suculência que fica na memória.',
  },
  {
    icon: <Timer size={22} />,
    title: 'Cozimento Lento',
    desc: 'Sabor que penetra até o centro, resultado que surpreende.',
  },
  {
    icon: <UtensilsCrossed size={22} />,
    title: 'Mais Sabor, Menos Pressa',
    desc: 'Menos correria, mais resultado. Cada minuto vale a pena.',
  },
]

export function ProductSection() {
  return (
    <section className="product-section" id="produto">
      <div className="container">

        {/* Header */}
        <div className="ps-header reveal">
          <span className="section-eyebrow">O Produto</span>
          <h2 className="section-title">
            Tambor Prime <span className="accent">Grill</span>
          </h2>
          <div className="divider" />
          <p className="ps-sub">
            Surpreenda seus familiares e amigos com o Tambor Prime Grill e
            transforme cada final de semana em uma experiência inesquecível.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="ps-grid">

          {/* Left — logo */}
          <div className="ps-left reveal">
            <div className="ps-logo-card">
              <img
                src="/assets/tambor-logo.jpeg"
                alt="Tambor Prime Grill"
                className="ps-logo-img"
              />
            </div>

            <div className="ps-avail-card">
              <div className="ps-avail-icon">
                <Tag size={20} />
              </div>
              <div>
                <strong>Venda &amp; Aluguel Disponíveis</strong>
                <span>
                  Para eventos, reuniões e fins de semana. Reserve com
                  antecedência e surpreenda seus convidados.
                </span>
              </div>
            </div>

            <div className="ps-avail-card">
              <div className="ps-avail-icon">
                <CalendarDays size={20} />
              </div>
              <div>
                <strong>Fale Conosco e Reserve o Seu</strong>
                <span>
                  Atendimento rápido via WhatsApp. Sem complicação, sem demora.
                </span>
              </div>
            </div>
          </div>

          {/* Right — features + CTA */}
          <div className="ps-right reveal reveal-delay-2">
            <p className="ps-right-lead">
              Com tecnologia de bafo e design robusto, o Tambor Prime Grill eleva
              o churrasco a outro nível. Cada detalhe foi pensado para entregar
              o melhor sabor possível — carne molhada, soltando caldo, sabor que
              derrete na boca.
            </p>

            <ul className="features-list">
              {features.map(({ icon, title, desc }) => (
                <li className="feature-item" key={title}>
                  <div className="feature-icon-box">{icon}</div>
                  <div className="feature-text">
                    <strong>{title}</strong>
                    <span>{desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="ps-social-row">
              <span>Reuna</span>
              <span className="ps-dot" />
              <span>Compartilhe</span>
              <span className="ps-dot" />
              <span>Aproveite</span>
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon size={20} />
              Reservar Agora
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
