import React, { useState } from "react";
import NavItems from "./NavItems";
import Logo from "./Logo";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Button from "../Button";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto py-2.5 px-4 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="hidden lg:flex items-center space-x-12">
            <NavItems />
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="hidden md:flex justify-center items-center space-x-12">
              <a href="/enrollment">
                <Button>Enrollment</Button>
              </a>
            </div>
            <div className="lg:hidden md:flex items-center justify-center space-x-12">
              <button
                className="rounded-lg text-slate-900"
                onClick={toggleMenu}
              >
                {showMenu ? (
                  <HiOutlineX size={24} />
                ) : (
                  <HiOutlineMenuAlt3 size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="lg:hidden p-6 bg-slate-50">
          <div className="flex flex-col items-center justify-around gap-6">
            <NavItems />
            <div className="md:hidden flex justify-center items-center">
              <a href="/enrollment">
                <Button>Enrollment</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
