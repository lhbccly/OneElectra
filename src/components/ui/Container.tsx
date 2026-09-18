import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'main'
  id?: string
}

export function Container({ children, className = '', as: Tag = 'div', id }: ContainerProps) {
  return (
    <Tag id={id} className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  )
}
