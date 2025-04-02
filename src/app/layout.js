import { Plus_Jakarta_Sans } from 'next/font/google'
import '../../src/app/assets/css/tailwind.css';
import '../../src/app/assets/css/materialdesignicons.min.css';

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ 
  subsets: ['latin'] ,
  weight: ['200','300','400','500','600', '700','800'],
  variable: '--font-plus_Jakarta_Sans',
})


export const metadata = {
  title: 'Jobstack - React Next.js Job portal & Job Listing Template',
  description: 'React Next.js Job portal & Job Listing Template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='ltr'>
      <body className={`${plus_Jakarta_Sans.variable} dark:bg-slate-900 font-plusjakarta`}>{children}</body>
    </html>
  )
}
