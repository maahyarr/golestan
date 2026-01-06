import React from "react";
import { Menu } from "lucide-react";
export default function Header() {

  const navItems = [
    { id: 1, title: "صفحه اصلی", href: "#" },
    { id: 2, title: "شرکت گلستان", href: "#" },
    { id: 3, title: "محصولات", href: "#" },
    { id: 4, title: "وبلاگ", href: "#" },
    { id: 5, title: "قرعه کشی", href: "#" },
    { id: 6, title: "استخدام", href: "#" },
    { id: 7, title: "تماس با ما", href: "#" },
    { id: 8, title: "EN", href: "#", hasBorder: true },
  ];


  return (
    <header className=" sticky top-0 bg-[#232323] shadow-sm relative z-50  mx-auto ">
      <div className=" w-[95%] max-w-400  mx-auto flex py-9.5">
        <div className="w-[20%]  ">
          <div className="w-42.5  absolute md:right-0 lg:right-38 xl:right-56 lg:top-[20%] top-[5%]">
            <img
              className="w-42.5  object-contain "
              src="../images/nav/logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-[80%] h-full flex items-center justify-right ">
          <div className="md:hidden absolute left-[10%]">
            <button className="text-white">
              <span className="material-icons">
                <Menu />
              </span>
            </button>
          </div>
          <nav className="hidden md:flex space-x-2.25 lg:space-x-6 lg:mr-[12%] space-x-reverse text-[16px] text-gray-300">
            {navItems.map((item)=>{
              return(
                  <a className="hover:text-primary transition"  key={item.id} href="#">
             {item.title}
            </a>
              )
            })}
          
           
          </nav>
        </div>
      </div>
    </header>
  );
}
