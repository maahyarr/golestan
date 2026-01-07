import React from "react";
import img1 from "/images/footer-1/1.png";
import img2 from "/images/footer-1/2.png";
import img3 from "/images/footer-1/3.png";
import img4 from "/images/footer-1/4.png";
import img5 from "/images/footer-1/5.png";
import img6 from "/images/footer-1/6.png";

export default function StatsSection() {
   const Images = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 }
  ];
  return (
    <>
    <div className="max-w-400 mx-auto bg-[#eeefef] h-[95px] flex justify-center items-center">
  {Images.map((image) => (
  <img
    key={image.id}
    src={image.image}
    className="w-[53px] h-[55px] object-contain transition-all duration-300 hover:opacity-0 cursor-pointer"
    alt=""
  />
))}
   
      
    </div>
     <div className='max-w-400 h-6 bg-[#ed1c24] relative mx-auto'></div>
    </>
  );
}
