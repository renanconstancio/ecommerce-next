import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div
      className="
        flex 
        flex-col 
        mx-auto 
        w-[90%]
        max-w-screen-2xl
      "
    >
      {children}
    </div>
  )
}
