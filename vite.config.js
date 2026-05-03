import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Em produção (GitHub Actions), GITHUB_REPOSITORY = "usuario/repo"
// A base vira "/repo/" automaticamente. Localmente fica "/".
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]

export default defineConfig({
  base: repoName ? `/${repoName}/` : '/',
  plugins: [react()],
})
