import { FC, ReactNode } from 'react'

type PropsTypes = {
  title: string
  chidren: ReactNode
}

export const Layout: FC<PropsTypes> = (children, title = 'Nextjs') => {
  return <div></div>
}
