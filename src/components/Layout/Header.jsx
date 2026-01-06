import React from "react";
import { Menu } from "lucide-react";
export default function Header() {
  return (
    <header className=" bg-[#232323] shadow-sm relative z-50 max-w-400 mx-auto ">
      <div className="sticky w-[95%]   mx-auto flex py-9.5">
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
            <a className="hover:text-primary transition" href="#">
              صفحه اصلی
            </a>

            <a className="hover:text-primary transition" href="#">
              شرکت گلستان
            </a>
            <a className="hover:text-primary transition" href="#">
              محصولات
            </a>
            <a className="hover:text-primary transition" href="#">
              وبلاگ
            </a>
            <a className="hover:text-primary transition" href="#">
              قرعه کشی
            </a>
            <a className="hover:text-primary transition" href="#">
              استخدام
            </a>
            <a className="hover:text-primary transition" href="#">
              تماس با ما
            </a>
            <a
              className="hover:text-primary transition border-r border-gray-500 pr-4"
              href="#"
            >
              EN
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
