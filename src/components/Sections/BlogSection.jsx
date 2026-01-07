import React from "react";
import blogImage1 from "/images/count12/1.jpg";
import blogImage2 from "/images/count12/2.jpg";
import blogImage3 from "/images/count12/3.jpg";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image: blogImage1,
      title: "ماکارونی با سبزیجات",
      description:
        "ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…",
      hiddenOnMobile: true,
    },
    {
      id: 2,
      image: blogImage2,
      title: "سوپ مکزیکی",
      description:
        "گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…",
      hiddenOnMobile: false,
    },
    {
      id: 3,
      image: blogImage3,
      title: "چیلاکیله",
      description:
        "احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست",
      hiddenOnMobile: false,
    },
  ];

  return (
    <>
      <div className="mt-8 lg:mt-12 mb-4 lg:mb-8">
        <h2 className="font-IRANSans text-[20px] font-bold leading-5 text-[#ed1c24] pt-4 mx-auto max-w-4xl px-4 lg:px-0 text-right">
          مجله گلستان
        </h2>
      </div>
      <div
        className="max-w-400 mx-auto flex flex-nowrap lg:flex-row-reverse flex-col p-5 lg:p-8 justify-center items-center gap-4 lg:gap-5 bg-[#cde4b0]"
        dir="rtl"
      >
        {blogPosts.map((post) => (
          <div 
            key={post.id}
            className={`shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-[318px] h-[602px] bg-white ${
              post.hiddenOnMobile ? 'hidden xl:block' : ''
            }`}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-[318px] h-[309px] object-cover"
            />
            <div className="p-6 flex flex-col flex-nowrap justify-between h-72">
              <a
                href="#"
                className="font-IRANSans text-[20px] font-extralight leading-[28px] text-[#ed1c24] no-underline mb-4"
              >
                {post.title}
              </a>
              <p className="font-IRANSans text-[14px] font-thin leading-[30px] text-[#7c7d7e] text-justify">
                {post.description}
              </p>
              <button className="btn-custom w-fit mt-4">ادامه مطلب</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}