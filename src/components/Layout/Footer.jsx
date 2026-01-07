import React from "react";
import footerImage1 from "/images/footer-2/1.png";
import footerImage2 from "/images/footer-2/2.png";
import footerImage3 from "/images/footer-2/3.png";
import footerImage4 from "/images/footer-2/4.png";
export default function Footer() {
  const footerColumns = [
    {
      id: 1,
      image: footerImage1,
      title: "حبوبات گلستان",
      links: [
        "لوبيا قرمز ممتاز",
        "لوبيا چيتی گلستان",
        "عدس كانادايی",
        "نخود زودپز كرمانشاه",
        "لوبيا سفيد گلستان",
      ],
    },
    {
      id: 2,
      image: footerImage2,
      title: "ادويه گلستان",
      links: [
        "زعفران ممتاز خراسان",
        "ادویه کاری",
        "ادویه ماست و خیار",
        "فلفل سياه خالص",
        "زردچوبه ممتاز",
      ],
    },
    {
      id: 3,
      image: footerImage3,
      title: "تی بگ گلستان",
      links: [
        "تی بگ بلک لاين",
        "تی بگ ارل گری",
        "دمنوش نعناع",
        "دمنوش بابونه",
        "منوش چای سبز",
      ],
    },
    {
      id: 4,
      image: footerImage4,
      title: "چای گلستان",
      links: [
        "چای ممتاز هندوستان​",
        "چای ممتاز ارل گری​",
        "چای سيلان عطری​",
        "چای ممتاز سيلان​",
        "چای صبحانه گلستان​",
      ],
    },
  ];
  return (
    <div className="bg-[url('/images/nav/header-back.png')] max-w-400 mx-auto flex flex-col justify-center items-center py-8 lg:py-12">
      <div className=" grid grid-cols-1  md:grid-cols-4 gap-8 mb-8 lg:mb-12 px-4 lg:px-8 w-[80%] lg:max-w-200">
        {footerColumns.map((col) => {
          return (
            <div
              key={col.id}
              className=" flex flex-col justify-between items-center"
            >
              <div className="-box text-center mb-4">
                <img src={col.image} alt="" className=" w-24 lg:w-32" />
              </div>
              <div className=" flex flex-col justify-between items-center w-full mb-6">
                <div className="w-full h-px bg-[#828991]"></div>
                <h2 className="font-IRANSans text-[16px] font-thin leading-[16px] text-white text-center my-3">
                  {col.title}
                </h2>
                <div className="w-full h-px bg-[#828991]"></div>
              </div>
              <div className=" w-full">
                {col.links.map((link, index) => {
                  return (
                    <a
                      key={index}
                      href="#"
                      className="font-IRANSans text-[13px] font-thin leading-[28px] text-[#bcbec0] hover:text-white transition-colors duration-300 no-underline block text-center lg:text-right mb-2"
                    >
                      {link}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className=" flex flex-col justify-center items-center gap-2 h-32 px-4">
        <span className="font-IRANSans text-[15px] font-normal leading-[15px] text-[#9f9f9f] text-center">
          All Right Reserved Golestan Company 2022-2026
        </span>
      </div>
    </div>
  );
}
