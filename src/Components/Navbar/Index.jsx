import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { FaCaretDown } from "react-icons/fa";

const dropdownLinks = [];

const Navbar = () => {
  return (
    <>
      <div className="fixed right-0 top-0 w-full bg-white font-Trebuchet text-black shadow-md">
        <div className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container hidden py-[2px] sm:block">
            <div className="flex justify-between py-[2px]">
              <p>25% Off on next booking</p>
              <p>Mobile No. +8801904-486467</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={Logo} className="h-16" alt="Logo" />
              </Link>
            </div>
            {/* Desktop Navlink Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink
                    activeClassName="active"
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeClassName="active"
                    to="/blogs"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeClassName="active"
                    to="/places"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    activeClassName="active"
                    to="/about"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>
                {/* Dropdown Menu Section */}
                <li>
                  <div className="dropdown group flex items-center">
                    <span>Quick Links</span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </div>
                  <div className="z-999 absolute left-9 hidden w-[150px] bg-white p-2 text-black shadow-md group-hover:block">
                    <ul>
                      {dropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          ></a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
