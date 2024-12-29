import React from "react";
import { FaBus } from "react-icons/fa";

const Location = () => {
  return (
    <>
      <div className="pb-14 md:py-28 bg-gray-50 py-8 tracking-wider text-2xl font-semibold text-dark text-center">
        <div className="container">
          <h1 data-aos="fade" className="pb-16">Why Choose Us</h1>
          <div data-aos="fade-right" data-aos-delay="300" className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4">
            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
              <p className="text-dark/70 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium
              </p>
              <p className="text-5xl rotate-90 text-primary">....</p>
              <FaBus className=" text-5xl text-primary" />
            </div>

            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
              <FaBus className=" text-5xl text-secondary" />
              <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">
                ....
              </p>
              <p className="text-dark/70 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium
              </p>
            </div>

            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
              <p className="text-dark/70 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium
              </p>
              <p className="text-5xl rotate-90 text-primary">....</p>
              <FaBus className=" text-5xl text-primary" />
            </div>

            <div className="text-center flex justify-center items-center flex-col gap-2 px-2">
              <FaBus className=" text-5xl text-secondary" />
              <p className="text-5xl rotate-90 text-secondary text-center translate-x-5">
                ....
              </p>
              <p className="text-dark/70 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
