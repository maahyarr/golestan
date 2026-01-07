import { ArrowUp } from 'lucide-react'
import React from 'react'

export default function ScrollTop() {
  return (
    <div className='w-[40px] h-[40px] bg-gray-800/75 fixed bottom-4 left-4 flex justify-center items-center'>
        <a href="#up"><ArrowUp/></a>
    </div>
  )
}
