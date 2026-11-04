import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background:    'var(--background)',
        surface:       'var(--surface)',
        'surface-hover':'var(--surface-hover)',
        border:        'var(--border)',
        'text-primary':'var(--text-primary)',
        'text-secondary':'var(--text-secondary)',
        accent:        'var(--accent)',
        'accent-hover':'var(--accent-hover)',
        danger:        'var(--danger)',
        'danger-hover':'var(--danger-hover)',
      },
    },
  },
  plugins: [],
}

export default config