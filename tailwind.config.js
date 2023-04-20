/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'pages/**/*.vue',
    'content/**/**.md',
    'layouts/**/*.vue',
    'components/**/**.vue'
  ],
  theme: {
    fontFamily: {
      'nunito': [`'Ubuntu'`, `'Noto Sans TC'`, 'sans-serif', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas']
    },
    extend: {
      minHeight: {
        'min-svh': 'calc(100svh - 80px - 104px)'
      },
      colors: {
        'primary': 'rgb(236 119 95/ <alpha-value>)',
        'cream': 'rgb(248 233 221 / <alpha-value>)'
      }
    }
  },
  plugins: []
}