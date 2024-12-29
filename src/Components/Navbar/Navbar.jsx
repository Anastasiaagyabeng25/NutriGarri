import { data } from "autoprefixer";
import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
import Logo from "../Hero/WhatsApp Image 2024-12-27 at 16.36.12_ab83fe2a.jpg"

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },

  {
    id: 1,
    name: "About",
    link: "/#",
  },

  {
    id: 1,
    name: "Contact",
    link: "/#",
  },
];

const DropdownLinks = [
  { id: 1, name: "vegetables", link: "/#" },

  { id: 1, name: "fruits", link: "/#" },

  { id: 1, name: "Grains", link: "/#" },
];

const Navbar = ({HandlePopup}) => {
  return (
    <>
     <div className="bg-white shadow-sm">
      <div className="container flex justify-between py-4 sm:py-3">
        <div className="font-bold w-16 sm:-mt-4"><img src={Logo} alt="" /></div>

        <div>
          <ul className="flex items-center gap-10">
            {NavLinks.map(({
              id ,name , link
            }) =>(<li key={id}><a href={link} className= " hidden sm:inline-block hover:text-primary text-xl font-semibold">{name}</a></li>))}



<li className=" hidden md:block cursor-pointer group">
                <a
                  href="/#"
                  className="inline-block hover:text-primary text-xl font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2 w-[200px] bg-white text-black shadow-md">
                    Dropdown
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block bg-white px-20">
                  <ul>
                    {DropdownLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          href={link}
                          className="inline-block w-full rounded-md p-2  hover:bg-primary/20  text-xl "
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>



              <li>
                <button
                  onClick={HandlePopup }
                  className="flex justify-center items-center gap-2 bg-secondary text-xl-h-[40px] text-white px-5 py-2 hover:scale-105 duration-300"
                >
                  <FaUser /> My Account
                </button>
              </li>



          </ul>
        </div>
      </div>

     </div>
    </>
  );
};

export default Navbar;
