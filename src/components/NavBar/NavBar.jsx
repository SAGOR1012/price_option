import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className="">
      <div className="md:hidden  " onClick={() => setOpen(!open)}>
        {open === true ? (
          /* jokhn open thakbe tokhn close er icon show korbe , r jokhn close thakbe tokhon menu er icon show korbe */
          <IoCloseSharp className="text-3xl" />
        ) : (
          <HiMenuAlt1 className="text-3xl "></HiMenuAlt1>
        )}
      </div>
      <ul
        className={`md:flex justify-center absolute md:static bg-slate-900 px-6  py-5
      shadow-lg duration-1000  ${open ? "top-16" : "-top-60"}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
