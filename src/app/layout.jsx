import './globals.css'

export const metadata = {
  title: 'Hospedaria Pedra da Mitra',
  description: 'Descanso e natureza',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
