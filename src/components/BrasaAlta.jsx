import { Flame, ArrowUpDown, Beef, Layers, SprayCan, SlidersHorizontal, ShieldCheck } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'
import { asset } from '../utils/asset'

const WA_LINK = 'https://wa.me/5516991019366'

const features = [
  { icon: <Beef size={18} />,           title: 'Carnes mais Suculentas',        desc: 'Calor na medida certa para um ponto perfeito.' },
  { icon: <Layers size={18} />,         title: 'Economia de Carvão',             desc: 'Aproveitamento máximo do calor e menos desperdício.' },
  { icon: <SprayCan size={18} />,       title: 'Facilidade na Limpeza',          desc: 'Menos sujeira e muito mais praticidade no dia a dia.' },
  { icon: <SlidersHorizontal size={18} />, title: 'Controle Total',              desc: 'Regule a altura e tenha domínio absoluto do seu churrasco.' },
  { icon: <ShieldCheck size={18} />,    title: 'Mais Segurança e Durabilidade',  desc: 'Estrutura reforçada, feita para durar por muitos anos.' },
]

export function BrasaAlta() {
  return (
    <section className="brasa-section" id="brasa">
      <div className="container">

        {/* Brand + text row */}
        <div className="brasa-grid">
          <div className="brasa-logo-box reveal">
            <img
              src={asset('assets/logo.jpeg')}
              alt="Logo Brasa Alta"
              loading="lazy"
            />
          </div>

          <div className="reveal reveal-delay-2">
            <span className="section-eyebrow">
              <Flame size={14} />
              Conheça Também
            </span>
            <h2 className="section-title">
              Brasa <span className="accent">Alta</span>
            </h2>
            <div className="divider" />

            <div className="brasa-tagline">
              <div className="brasa-tagline-bar" />
              <blockquote>
                "Onde o fogo sobe, o sabor transcende."
              </blockquote>
            </div>

            <p className="brasa-lead">
              Eleve seu churrasco a outro nível. Com o suporte de carvão Brasa
              Alta, você tem mais controle, mais sabor e mais prazer — chega de
              improviso, tenha um churrasco de verdade.
            </p>
            <p className="brasa-lead">
              Design robusto, moderno e sofisticado com <strong style={{ color: 'var(--gold)' }}>regulagem de altura</strong> para
              domínio total do fogo.
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Flame size={18} />
              Saiba Mais
            </a>
          </div>
        </div>

        {/* Product showcase */}
        <div className="brasa-product-showcase reveal">
          <div className="brasa-showcase-img-wrap">
            <img
              src={asset('assets/brasa-produto.jpeg')}
              alt="Brasa Alta — Suporte para Carvão com Regulagem de Altura"
              loading="lazy"
            />
          </div>

          <div className="brasa-showcase-info">
            <div className="brasa-showcase-header">
              <span className="section-eyebrow">
                <ArrowUpDown size={13} />
                Altura que Transforma
              </span>
              <h3 className="brasa-showcase-title">
                Suporte para Carvão<br />
                <span className="accent">com Regulagem de Altura</span>
              </h3>
              <p className="brasa-showcase-sub">
                Mais controle. Mais sabor. Mais prazer.
              </p>
            </div>

            <ul className="brasa-features-grid">
              {features.map(({ icon, title, desc }) => (
                <li className="brasa-feature-item" key={title}>
                  <div className="brasa-feature-icon">{icon}</div>
                  <div>
                    <strong>{title}</strong>
                    <span>{desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsAppIcon size={20} />
              Garanta o Seu — (16) 99101-9366
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
