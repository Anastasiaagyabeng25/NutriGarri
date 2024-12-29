import React from "react";
import Polygon from "../../assets/assets/polygon.png";
import Vector from "../../assets/assets/vector-wave.png";
import { FaUser } from "react-icons/fa";
const BgStyle = {
  backgroundImage: `url(${Polygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const About = ({ HandlePopup }) => {
  return (
    <>
      <div style={BgStyle} className="py-14">
        <div className="container min-h-[500px] relative z-10">
          <h1
            data-aos="fade"
            className="  tracking-wider text-2xl font-semibold text-white/70 text-center"
          >
            About Us
          </h1>

          <div
            data-aos="fade"
            data-aos-delay="300"
            className="bg-white/80 p-10 my-10"
          >
            <div>
              <h1 className="text-3xl flex items-center justify-center">
                MISSION
              </h1>
              <p className="text-gray-500">
                Empowering Healthier Communities At NutriGarri, our mission is
                to revolutionize the traditional garri industry in Africa by
                providing a nutritious, sustainable, and accessible food source.
                <span className="text-xl ">We aim to: </span>mprove Nutrition:
                Enhance the nutritional value of garri by fortifying it with
                plant-based proteins. Promote Sustainability: Adopt
                environmentally friendly practices and sourcing methods to
                minimize our ecological footprint. Increase Accessibility: Make
                NutriGarri available and affordable for everyone, regardless of
                geographical location or socio-economic status. Empower Local
                Communities: Educate, create jobs, and partner with local
                communities to promote economic growth and development.
              </p>
              <div>
                <h1 className="text-2xl  flex justify-center"> VISION</h1>
                <p className="text-center text-gray-500">Our vision is to become the leading provider of nutritious and sustainable garri products in Africa,</p>
              </div>
            </div>
            <div className="pt-10 flex justify-center">
              <button
                onClick={HandlePopup}
                className="flex justify-center items-center gap-2 bg-primary text-xl-h-[40px] text-white px-5 py-2 hover:scale-105 duration-300"
              >
                <FaUser /> My Account
              </button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full">
          <img src={Vector} alt="" className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default About;
