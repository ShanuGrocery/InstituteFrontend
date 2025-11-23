import React, { useState } from "react";
import { NavbarMenu } from "../../Mockdata/data";
import { MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (id) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const colorClasses = ["text-green-600"];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="w-full flex items-center gap-6 py-4 px-4 md:px-8">
        {/* Logo - forced left */}
        <Link to="/" className="flex items-center gap-3 w-52">
          <img
            src={logo}
            alt="CIHS Logo"
            className="h-12 w-auto object-contain"
          />
          <div className="leading-tight hidden sm:block">
            <span className="text-xl font-bold uppercase">
              <span className="text-green-600">Cihs</span> Studies
            </span>
            <div className="text-xs text-green-500 uppercase tracking-wide">
              Private Limited
            </div>
          </div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8 text-gray-700 font-medium uppercase tracking-wide">
            {NavbarMenu.map((item, index) => {
              const colorClass = colorClasses[index % colorClasses.length];
              return (
                <li key={item.id} className="relative group">
                  <a
                    href={item.link}
                    className={`px-3 py-2 hover:text-green-600 transition-colors ${colorClass}`}
                  >
                    {item.title}
                  </a>

                  {item.submenu && (
                    <ul className="absolute top-full left-0 mt-3 w-52 bg-white border border-gray-100 shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                      {item.submenu.map((sub, i) => (
                        <li key={i}>
                          <a
                            href={sub.link}
                            className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-600 rounded transition"
                          >
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex flex-none">
          <Link
            to="/login"
            className="ml-4 bg-gradient-to-r from-green-500 to-teal-500 
    text-white text-base px-7 py-3 
    rounded-full font-bold shadow-md 
    hover:shadow-lg hover:from-green-600 hover:to-teal-600 
    transition-all duration-300"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl text-green-600 hover:bg-green-100 rounded-full p-2"
          >
            {mobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-md px-4 pb-5 space-y-3"
          >
            <ul className="flex flex-col gap-2 text-gray-700 font-medium uppercase tracking-wide">
              {NavbarMenu.map((item, index) => {
                const colorClass = colorClasses[index % colorClasses.length];
                return (
                  <li key={item.id}>
                    <div
                      onClick={() =>
                        item.submenu ? toggleSubmenu(item.id) : null
                      }
                      className={`flex justify-between items-center py-3 px-3 rounded cursor-pointer hover:bg-green-50 ${colorClass} hover:text-green-700`}
                    >
                      {item.link ? (
                        <a href={item.link}>{item.title}</a>
                      ) : (
                        item.title
                      )}

                      {item.submenu && (
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            openSubmenus[item.id] ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </div>

                    {/* Submenu items */}
                    {item.submenu && openSubmenus[item.id] && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-5 mt-2 space-y-1 text-sm"
                      >
                        {item.submenu.map((sub, i) => (
                          <li key={i}>
                            <a
                              href={sub.link}
                              className="block py-2 px-3 rounded hover:bg-green-50 text-gray-600"
                            >
                              {sub.title}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </li>
                );
              })}

              {/* Mobile CTA */}
              <li>
                <Link
                  to="/login"
                  className="block py-3 px-4 text-center mt-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full shadow-md hover:from-green-600 hover:to-teal-600 transition-all duration-300"
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
