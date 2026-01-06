import React from 'react'
import Button from "../Ui/Button"
import teaimage from"/images/count1/tea-pic1.png"
export default function HeroSection() {
  const heroContent = {
    title: "قرعه‌کشی مصرف‌کنندگان گلستان",
    subtitle: "قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان",
    description: "هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد قرعه کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای سال 1403 شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.",
    buttonText: "اطلاعات بیشتر"
  }




  return (
<div className="max-w-400 mx-auto min-h-114.25 bg-linear-to-br from-[#fbfbfb] to-[#d2d2d2] flex flex-col lg:flex-row lg:justify-center ">
    <div className="w-[90%] lg:w-[37%] mx-auto min-h-114.25  flex items-center">
        <div>
         <h2 className=" text-3xl font-normal lg:text-[30px] text-[#ed1c24] mb-4"> {heroContent.title}</h2>
              <h2 className="box-two text-xl lg:text-2xl font-light text-[#58595b] mb-6"> {heroContent.subtitle}</h2>
              <h2 className="box-three animate__animated animate__fadeInDown text-base lg:text-lg font-light text-[#898989] leading-loose my-8 lg:my-10">
                {heroContent.description}
              </h2>
             <Button>{heroContent.buttonText}</Button>
              </div>
    </div>
    <div className="w-[90%] lg:w-[35%] mx-auto lg:mx-0  min-h-114.25  flex justify-center items-start lg:items-center">
        <img src={teaimage} alt="" className="left-img animate__animated animate__fadeInDown w-full max-w-87.5" />
    </div>
</div>
  )
}
