import React from "react";
import Button from "../Ui/Button";

export default function VideoSection() {
  const videoCards = [
    {
      id: 1,
      videoSrc:
        "https://www.aparat.com/video/video/embed/videohash/cQ0yF/vt/frame",
      title: "سالاد نودل",
      description:
        "نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.",
      buttonText: "ویدیوهای بیشتر",
      hiddenOnMobile: true,
      iframeId: "29210393269",
    },
    {
      id: 2,
      videoSrc:
        "https://www.aparat.com/video/video/embed/videohash/u551866/vt/frame",
      title: "اینستاگرام هاتی نودل",
      description:
        "نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای سالم و كاملی ساخته است.",
      buttonText: "ادامه مطلب",
      hiddenOnMobile: false,
      iframeId: "34225369937",
    },
    {
      id: 3,
      videoSrc:
        "https://www.aparat.com/video/video/embed/videohash/x4047ld/vt/frame",
      title: "برنج گلستان",
      description:
        "عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌ لایق بهترین ها هستند.",
      buttonText: "مشاهده محصولات",
      hiddenOnMobile: false,
      iframeId: "29743419255",
    },
  ];
  return (
    <div
      className="max-w-400 mt-7 mx-auto flex flex-nowrap lg:flex-row flex-col p-5 lg:p-8 justify-center items-center gap-4 lg:gap-5"
      dir="rtl"
    >
      {videoCards.map((card) => {
        return(
        <div key={card.id} className={`shadow-[-3px_3px_7px_0px_rgba(0,0,0,0.2)] w-[318px] h-[450px] bg-white ${
            card.hiddenOnMobile ? 'hidden xl:block' : ''
          }`}>
          <div
            id={card.iframeId}
            className="h-48 flex items-center justify-center bg-gray-200"
          >
            <iframe
              src={card.videoSrc}
              title="Aparat Video"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="p-6 flex flex-col flex-nowrap justify-between h-64">
            <a href="#" className="c13-a no-underline mb-2">
            {card.title}
            </a>
            <p className="c13-p">
        {card.description}
            </p>
            <Button>ویدیوهای بیشتر</Button>
            
          </div>
        </div>);
      })}
    </div>
  );
}
