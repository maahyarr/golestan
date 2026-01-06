import React from "react";
import Bar from "../Ui/Bar";
import Button from "../Ui/Button";

export default function SocialResponsibility() {
  return (
    <>
      <div className="max-w-400 mx-auto min-h-[600px]  bg-[#105153] relative mt-8 lg:mt-12">
        <div className=" flex flex-nowrap flex-col justify-center items-center  h-96">
          <h2 className="font-IRANSans text-[18px] font-thin leading-[35px] pt-30 md:pt-0 text-[#d5ece1] mb-4">
            مسئوليت‌های اجتماعی شركت گلستان
          </h2>
          <div className="w-full h-px bg-[#00d8df]"></div>
          <h2 className="font-IRANSans text-[20px] font-normal leading-[36px] text-[#00d8df] my-4">
            Golestan Social Responsibility
          </h2>
          <h2 className="font-IRANSans text-[17px] font-thin leading-[17px] text-[#bcbec0]">
            Mahdi Hospital
          </h2>
        </div>

        <div className="max-w-400 absolute left-1/2 transform -translate-x-1/2 -bottom-[20%] flex justify-center z-20">
          <img
            src="public/images/count14/1.jpg"
            alt=""
            className=" min-w-[330px] min-h-[304px] rounded-lg object-cover "
          />
        </div>
      </div>
      <div className="max-w-400 h-6 bg-[#e9d69f] relative mx-auto"></div>
      <Bar />
      <div className="max-w-[700px] mx-auto pt-8 lg:pt-12 pe-4 mt-20 md:mt-12 lg:mt-22">
        <div className="mx-auto max-w-4xl px-4 lg:px-0 text-right">
          <h2 className="font-IRANSans text-[20px] font-bold leading-[20px] text-[#ed1c24] pt-4">
            مسئوليت‌های اجتماعی گلستان
          </h2>
          <p className="font-IRANSans text-[16px] font-thin leading-[36px] text-[#7a7a7a] text-justify pt-4">
            كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین،
            قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری فراتر
            از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و
            امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند.
            <span className="text-golestan-red font-bold">گلستان</span> در
            فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه را
            در دستوركار خود قرار داده است.
          </p>
          <div className=" pt-9 pb-5 mb-4">
            <Button> اطلاعات بيشتر</Button>
          </div>
        </div>
      </div>
    </>
  );
}
