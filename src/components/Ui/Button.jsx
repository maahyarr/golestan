import React from 'react'

export default function Button({children}) {
  return (
    <button className="text-[#898989] bg-white border border-[#c8c8c8] px-6 py-3 font-[IRANSans] text-[15px] font-normal leading-[15px] scroll-smooth rounded-[4px]  transition-colors hover:text-white hover:bg-[#ed1c24] hover:border-[#ed1c24] hover:cursor-pointer">
        {children}
  
</button>
  )
}
