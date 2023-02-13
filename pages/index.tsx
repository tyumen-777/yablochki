import BaseLayout from '@/src/layouts/BaseLayout'
import SEO from '@/src/layouts/SEO'
import Main from '@/src/screens/main/Main'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <BaseLayout>
      <SEO title='Yablochki - мобильные гаджеты от А до Я' />
      <Main/>
    </BaseLayout>
  )
}
