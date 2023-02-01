import Head from 'next/head'
import { FC, ReactNode } from 'react'

type Props = {
  title: string
  children?: ReactNode | undefined
}

export const Layout: FC<Props> = ({ children, title = 'To do...' }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}
