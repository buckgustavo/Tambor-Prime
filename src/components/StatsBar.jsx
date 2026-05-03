const stats = [
  { number: '100%', label: 'Carne Suculenta & Saborosa' },
  { number: 'Venda', label: 'e Aluguel Disponíveis' },
  { number: '5★', label: 'Satisfação Garantida' },
]

export function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-grid">
        {stats.map(({ number, label }) => (
          <div className="stat-item" key={label}>
            <span className="stat-number">{number}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
