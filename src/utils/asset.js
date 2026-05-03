// Resolve o caminho correto do asset tanto em dev quanto no GitHub Pages
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
