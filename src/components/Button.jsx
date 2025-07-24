import React from 'react'
import { cn } from './main/index'
export const Button = ({children,className}) => {
  return (
    <button className={cn('bg-primary px-6 py-3.5 rounded-[8px] leading-[150%] text-lg font-medium font-primary cursor-pointer',className)}>
        {children}
    </button>
  )
}

