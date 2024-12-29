import React from "react";
import BowlGari from "../../assets/assets/images/download (2).jpg";
import Milk from "../../assets/assets/images/milk-image.png";
import Cassava from "../../assets/assets/images/download__4_-removebg-preview (1)(1).png";
import Gari from "../../assets/assets/images/download (1).jpg";
import Cereal from "../../assets/assets/images/download (6).jpg";
import PrimaryButton from "../Shared/PrimaryButton";
const Banner = () => {
  return (
    <>
      <div className="container py-14 relative">
        
          <h1 data-aos="fade-up" data-aos-delay="500" className="py-8 tracking-wider text-2xl font-semibold text-dark text-center sm:-top-80">
            Taste the Healthy Difference
          </h1>

          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div>
                <p>
                  {" "}
                  Welcome to <span className="text-primary">Nuti Gari,</span> is the
                    
                  where tradition meets nutrition! We bring you premium-quality gari, enriched with essential nutrients to provide a wholesome and delicious experience. Perfect for every meal, Nuti Gari is your go-to choice for healthy, convenient, and authentic taste. Let us fuel your day, the nutritious way
                </p>
              </div>
              <div></div>
            </div>

            <div data-aos="fade-up" data-aos-delay="500" className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
              <div></div>
              <div data-aos="fade-up" data-aos-delay="500">
                <p>
                  {" "}
                  Introducing<span className="text-primary"> Nuti Gari</span> 
                   where quality meets nutrition! Our gari is crafted to perfection, offering a rich, authentic taste packed with the nutrients you need to stay energized. Whether for breakfast, lunch, or dinner, Nuti Gari is the perfect blend of tradition and health in every scoop!
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-32 sm:mt-14"> 
              <PrimaryButton/>
              </div>

              <div data-aos="fade-right" className="absolute top-5 -left-16 sm:bottom-0 sm:top-0 sm:left-0 opacity-50 sm:opacity-100">
                <img src={Cassava} alt="" className="max-w-[130px]   " />
              </div>

              <div data-aos="fade-right" className="absolute   -left-0 top-[380px]  sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100">
                <img src={Cereal} alt="" className="max-w-[100px]" />
              </div>
           
              <div data-aos="fade-left" className="absolute  top-10   -right-16 sm:right-20 opacity-50 sm:opacity-100">
                <img src={Gari} alt="" className="max-w-[130px]" />
              </div>

              <div data-aos="fade"className="hidden  sm:block absolute bottom-0 right-0">
                <img src={BowlGari} alt="" className="max-w-[150px]" />
              </div>

              <div data-aos="fade-right" className="absolute  top-[400px]  -translate-y-1/2 left-[100px] sm:left-1/2 md:left-1/4  -translate-x-1/2 opacity-100">
                <img src={Milk} alt="" className="max-w-[130px]" />
              </div>

          </div>
          </div>
       </>
      
    
  );
};

export default Banner;
