import React from 'react'
import Bar from '../Ui/Bar'

export default function AboutSection() {
  return (
    <>
    <Bar/>
    <div className="pt-8 lg:pt-12 max-w-400 min-h-155  mx-auto">

        <div className="mx-auto max-w-175 px-4 lg:px-0 text-right animate__animated animate__fadeInRightBig">
          <h2 className="font-IRANSans text-[18px] font-bold leading-5 text-[#ed1c24] pt-4">معرفی گلستان</h2>
          <h2 className="font-IRANSans text-[15px] font-thin leading-[36px] text-[#7a7a7a] text-justify pt-4">
            آنچه که امروز با نام مجموعه <span className="text-golestan-red">گلستان</span> می‌شناسیم در سال 1329 بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد.
            <span className="text-golestan-red">گلستان</span> پس از سال‌ها تلاش همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها کالاهایی قابل اعتماد و با کیفیت تولید نماید.
          </h2>
          <h2 className="font-IRANSans text-[16px] font-thin leading-9 text-[#7a7a7a] text-justify pt-4">
            هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی
            <span className="text-golestan-red">شرکت گلستان</span> است.
          </h2>
          <div className="font-IRANSans text-[20px] font-bold leading-5 text-[#ed1c24] pt-4">محصولات گلستان​</div>
          <p className="font-IRANSans text-[16px] font-thin leading-9 text-[#7a7a7a] text-justify pt-4">
            <span className="text-golestan-red font-bold"> نام تجاری گلستان</span> قدمتی به اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت کیفیت این نام تجاری حمایت می‌کنند.
          </p>
        </div>
    </div>
    <div className="hidden md:flex flex-row-reverse flex-nowrap justify-center max-w-400 mx-auto min-h-72.5  mt-8 lg:mt-12 mb-32 lg:mb-48 animate__animated animate__zoomIn">
             
        <div className=" m-2 lg:m-4 flex flex-col flex-nowrap justify-around items-center border-b border-b-[#dbdbdb]">
          <img src="images/count3/1.png" alt="" className=" w-40 lg:w-48" />
          <p className="font-IRANSans text-[16px] font-thin leading-5.25 text-[#7c7d7e] text-center mt-2.5">مشتریان گلستان</p>
        </div>
        <div className=" m-2 lg:m-4 flex flex-col flex-nowrap justify-around items-center border-b border-b-[#dbdbdb]">
          <img src="images/count3/2.png" alt="" className=" w-40 lg:w-48" />
          <p className="font-IRANSans text-[16px] font-thin leading-5.25 text-[#7c7d7e] text-center mt-2.5">محصولات گلستان</p>
        </div>
        <div className=" m-2 lg:m-4 flex flex-col flex-nowrap justify-around items-center border-b border-b-[#dbdbdb]">
          <img src="images/count3/3.png" alt="" className=" w-40 lg:w-48" />
          <p className="font-IRANSans text-[16px] font-thin leading-5.25 text-[#7c7d7e] text-center mt-2.5">مراكز فروش</p>
        </div>
        <div className=" m-2 lg:m-4 flex flex-col flex-nowrap justify-around items-center border-b border-b-[#dbdbdb]">
          <img src="images/count3/4.png" alt="" className=" w-40 lg:w-48" />
          <p className="font-IRANSans text-[16px] font-thin leading-5.25 text-[#7c7d7e] text-center mt-2.5">سرمایه انسانی</p>
        </div>
      
    </div>
    </>
  )
}
