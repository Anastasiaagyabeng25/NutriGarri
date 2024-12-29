import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div  data-aos="fade-down"className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
          <div>
            <h1 className="py-10 text-3xl font-bold items-center flex justify-center">Contact Us</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <IoLocationSharp className="text-5xl " />
                </div>
                <p>
                  Yaounde <br /> Cameroon
                  
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <MdEmail className="text-5xl " />
                </div>
                <div>
                  <p>nutrigarri@gmail.com
                  </p>
                  <p>nutrigarri@gmail.com
                  </p>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <FaPhone className="text-5xl " />
                </div>
                <div>
                  <p>+237 652804388  - Sales and Services</p>
                  <p> +237 652804388 - Hiring Queries</p>
                  <p>+237 652804388- Whatsapp</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between p-4 items-center">
              <p>@ 2025 Copyright. All rights reserved</p>
              <div className="flex items-center gap-6">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
             </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
