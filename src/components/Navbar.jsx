import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { WhatsAppIcon } from './WhatsAppIcon'

const WA_LINK = 'https://wa.me/5516991019366'

const links = [
  { href: '#produto', label: 'O Produto' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#brasa', label: 'Brasa Alta' },
  { href: '#contato', label: 'Contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="navbar-brand" onClick={close}>
          <span className="navbar-brand-dot" />
          Tambor Prime
        </a>

        <ul className="navbar-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
          <li>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-cta"
            >
              <WhatsAppIcon size={16} />
              Fale Conosco
            </a>
          </li>
        </ul>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(({ href, label }) => (
          <a key={href} href={href} onClick={close}>
            {label}
          </a>
        ))}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta"
          onClick={close}
        >
          <WhatsAppIcon size={18} />
          Chamar no WhatsApp
        </a>
      </div>
    </>
  )
}
