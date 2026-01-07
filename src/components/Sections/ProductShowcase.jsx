import React from "react";
import Bar from "../Ui/Bar";
import Button from "../Ui/Button";
import riceImage from "/images/count4/1.jpg";
import teaImage from "/images/count6/1.jpg";
import nutsImage from "/images/count8/1.jpg";
export default function ProductShowcase() {
  const products = [
    {
      id: 1,
      image: riceImage,
      title: "برنج گلستان",
      subtitle: "معرفی محصول",
      heading: "رکن اول غذای ایرانی",
      description: 
        "مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.",
      
      buttons: [{ text: "محصولات برنج" }, { text: "آشپزخانه گلستان" }],
    },
    {
      id: 2,
      image: teaImage,
      title: "چای گلستان",
      subtitle: "معرفی محصول",
      heading: "سابقه‌ای به قدمت یک عمر",
      description: 
        <>
        چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش را به همراه دارد.,
        
        <br/>
        <br/>
          برای مردمان ایران زمین نام
          <span className="text-[#ed1c24] font-bold">گلستان</span> با چای پیوند
          خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و
          بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث
          شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به
          یادماندنی آن است.
        </>,
      
      buttons: [{ text: "محصولات چای" }],
    },
    {
      id: 3,
      image: nutsImage,
      title: "آجیل گلستان",
      subtitle: "معرفی محصول",
      heading: "آجيل‌های خوش خنده",
      description: 
        <>
        "خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.",
        
        <br />
        <br />
         <span className="text-[#ed1c24] font-bold">پسته گلستان</span> اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد.
        </>,
      
      buttons: [{ text: "ناتس گلستان" }],
    },
  ];

  return (
    <>
      <Bar />
      {products.map((product) => {
        return (
          <React.Fragment key={product.id}>
            <div className="relative mb-8 lg:mb-12 max-w-400 mx-auto">
              <div className="c4-box1 w-full md:min-h-125">
                <img
                  src={product.image}
                  alt=""
                  className=" w-full h-60.25 md:min-h-125 object-right md:object-cover"
                />
              </div>

              <div className="max-w-400 h-6 bg-[#e9d69f] relative mx-auto">
                <div className="bg-[#ed1c24] w-full md:w-[289px] md:h-[93px] absolute bottom-0 md:right-[20%] text-right">
                  <h3 className="font-IRANSans text-[29px] font-thin leading-[44px] text-white text-start pr-10 pe-4">
                    {product.title}
                  </h3>
                  <span className="font-IRANSans text-[16px] font-thin leading-[44px] pr-10 text-white text-end pe-4">
                   {product.subtitle}
                  </span>
                </div>
              </div>
            </div>
            <Bar />
            <div className=" pt-5 pe-4 max-w-400 mx-auto">
              <div className="mx-auto max-w-175 px-4 lg:px-0 text-right">
                <h2 className="font-IRANSans text-[20px] font-bold leading-[20px] text-[#ed1c24] pt-4">
                 {product.heading}
                </h2>
                <p className="font-IRANSans text-[16px] font-thin leading-[36px] text-[#7a7a7a] text-justify pt-4">
                  {product.description}
                </p>
                <div className="font-IRANSans text-[20px] font-bold leading-[20px] text-[#ed1c24] pt-4 pb-5 mb-4 flex flex-row flex-wrap gap-2 lg:gap-4">
                              {product.buttons.map((button, index) => (
                  <Button key={button.text}>
                    {button.text}
                  </Button>
                ))}
                </div>
              </div>
            </div>
           </React.Fragment>
        );
      })}

      <div className="max-w-400 mx-auto bg-[url('images/count10/recipe-baner-1.png')] bg-center bg-fixed bg-cover h-[250px]"></div>
    </>
  );
}
