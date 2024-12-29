import React from "react";
import HeroImg from "../../assets/assets/images/images__2_-removebg-preview_1_-removebg-preview(2).png"
import HeroBg from "../../assets/assets/heroBg.png"
import PrimaryButton from "../Shared/PrimaryButton";

const BgStyle= {
  backgroundImage:`url(${HeroBg})`,
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  backgroundSize :"cover",
  width:"100%",
  height:"100%"
};




const Hero = () => {
  return <>
  <div style={BgStyle} className="relative z-[-1]">
 <div className="container py-16 sm:py-0">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
    <div className="space-y-7 text-dark order-2 sm:order-1">
      <h1  data-aos="fade"  className="text-5xl">Fresh & Healthy Nutri Gari {" "} <span className="text-secondary font-cursive text-7xl"> Delivery</span> {""}  to your Door Step</h1>
      <p  data-aos="fade" data-aos-delay="300" className="lg:pr-64">
      Enhance the nutritional value of garri by fortifying it with plant-based proteins.


        </p>
        <div data-aos="fade" data-aos-delay="500">
        <PrimaryButton/>
        </div>
      </div>



      <div data-aos="zoomin" data-aos-delay="300" className=" relative z-30 order-1 sm:order-2">
        <img src={HeroImg} alt="" className="w-full sm-scale-125 sm:translate-x-16"/>
      </div>
  </div>
 </div>
  </div>
  </>;
};

export default Hero;
