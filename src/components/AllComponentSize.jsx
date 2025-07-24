import React from 'react'
import { cn } from './main'
export const AllComponentSize = ({children,className}) => {
  return (
    <div className={cn('max-w-[1596px] px-[162px] py-[130px] mx-auto',className)}>
        {children}
    </div>
  )
}

