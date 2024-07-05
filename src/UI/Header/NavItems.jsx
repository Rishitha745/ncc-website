import React from "react";
import { navItems } from "../../Constants";

const NavItems = () => {
  return (
    <>
      {navItems.map((item, index) => (
        <a
          key={index}
          className="cursor-pointer focus:text-neutral-500 text-slate-900 hover:text-slate-700"
          href={item.href}
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

export default NavItems;
