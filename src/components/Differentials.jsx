import { Flame, Shield, CalendarCheck, Clock, ChefHat, Headphones } from 'lucide-react'

const cards = [
  {
    icon: <Flame size={24} />,
    title: 'Sabor Inigualável',
    desc: 'O sistema de bafo do Tambor Prime garante uma carne que solta caldo e derrete na boca. Uma experiência que fica na memória.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Construção Robusta',
    desc: 'Feito em tambor de aço matte black de alta resistência. Preparado para muitas e muitas churrasqueadas ao longo dos anos.',
  },
  {
    icon: <CalendarCheck size={24} />,
    title: 'Venda & Aluguel',
    desc: 'Disponível para eventos, reuniões corporativas e aniversários. Reserve com antecedência e surpreenda seus convidados.',
  },
  {
    icon: <Clock size={24} />,
    title: 'Menos Pressa, Mais Sabor',
    desc: 'O cozimento lento é o segredo. Sabor profundo e textura perfeita — o resultado vale cada minuto de espera.',
  },
  {
    icon: <ChefHat size={24} />,
    title: 'Fácil de Usar',
    desc: 'Design intuitivo para qualquer churrasqueiro, do iniciante ao mestre. Acenda o fogo, coloque a carne e aproveite.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Atendimento Rápido',
    desc: 'Entre em contato via WhatsApp e receba atendimento imediato. Reserva fácil, entrega pontual e suporte dedicado.',
  },
]

export function Differentials() {
  return (
    <section className="differentials" id="diferenciais">
      <div className="differentials-header reveal">
        <span className="section-eyebrow">
          Por que escolher
        </span>
        <h2 className="section-title">
          Nossos <span className="accent">Diferenciais</span>
        </h2>
        <div className="divider" />
        <p>
          Mais que um equipamento, o Tambor Prime Grill é uma experiência completa.
          Descubra o que nos torna diferentes.
        </p>
      </div>

      <div className="cards-grid container">
        {cards.map(({ icon, title, desc }, i) => (
          <div
            className={`diff-card reveal reveal-delay-${(i % 3) + 1}`}
            key={title}
          >
            <div className="diff-card-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
