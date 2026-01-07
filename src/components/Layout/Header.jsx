import React from "react";
import { Menu, ChevronDown } from "lucide-react";
import logo from "/images/nav/logo.png"

export default function Header() {
  const navItems = [
    { 
      id: 1, 
      title: "صفحه اصلی", 
      href: "#" 
    },
    { 
      id: 2, 
      title: "شرکت گلستان", 
      href: "#",
      submenu: [
        { id: 21, title: "تاریخچه شرکت", href: "#" },
        { id: 22, title: "ماموریت و چشم انداز", href: "#" },
        { id: 23, title: "تیم مدیریت", href: "#" }
      ]
    },
    { 
      id: 3, 
      title: "محصولات", 
      href: "#",
      submenu: [
        { id: 31, title: "محصولات غذایی", href: "#" },
        { id: 32, title: "محصولات بهداشتی", href: "#" },
        { id: 33, title: "محصولات جدید", href: "#" },
        { id: 34, title: "محصولات پرفروش", href: "#" }
      ]
    },
    { 
      id: 4, 
      title: "وبلاگ", 
      href: "#",
      submenu: [
        { id: 41, title: "مقالات تخصصی", href: "#" },
        { id: 42, title: "اخبار شرکت", href: "#" },
        { id: 43, title: "تازه های صنعت", href: "#" }
      ]
    },
    { 
      id: 5, 
      title: "قرعه کشی", 
      href: "#" 
    },
    { 
      id: 6, 
      title: "استخدام", 
      href: "#",
      submenu: [
        { id: 61, title: "فرصت های شغلی", href: "#" },
        { id: 62, title: "ارسال رزومه", href: "#" },
        { id: 63, title: "شرایط کاری", href: "#" }
      ]
    },
    { 
      id: 7, 
      title: "تماس با ما", 
      href: "#" 
    },
    { 
      id: 8, 
      title: "EN", 
      href: "#", 
      hasBorder: true 
    },
  ];

  return (
    <header className="sticky top-0 bg-[#232323] shadow-sm relative z-50 mx-auto">
      <div className="w-[95%] max-w-400 mx-auto flex py-9.5">
        <div className="w-[20%]">
          <div className="w-42.5 absolute md:right-0 lg:right-32 xl:right-52 lg:top-[20%] top-[5%]">
            <img
              className="w-42.5 object-contain"
              src={logo}
              alt="لوگو گلستان"
            />
          </div>
        </div>
        <div className="w-[80%] h-full flex items-center justify-right">
          <div className="md:hidden absolute left-[10%]">
            <button className="text-white">
              <span className="material-icons">
                <Menu />
              </span>
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-2.25 lg:space-x-6 lg:mr-[8.5%] space-x-reverse text-[16px] text-gray-300 relative">
            <ul className="flex items-center space-x-2.25 lg:space-x-6 space-x-reverse">
              {navItems.map((item) => (
                <li 
                  key={item.id}
                  className="relative group"
                >
                  <a 
                    className={`
                      flex items-center gap-1 py-2 px-1 hover:text-white transition-colors duration-200
                      ${item.hasBorder ? 'border-r border-gray-500 pr-4' : ''}
                    `}
                    href={item.href}
                  >
                    {item.title}
                    
                  </a>
                  
                  {/* Submenu Dropdown */}
                  {item.submenu && (
                    <ul 
                      className="
                        absolute right-0 mt-0 w-48 bg-[#2a2a2a] rounded-lg shadow-lg py-2 
                        opacity-0 invisible -translate-y-2
                        transition-all duration-300 ease-in-out
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      "
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.id}>
                          <a
                            className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#3a3a3a] transition-colors duration-200"
                            href={subItem.href}
                          >
                            {subItem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}