import React from "react";
import image1 from "../pictures/s3.jpg";
import image2 from "../pictures/logo2.png";
import image3 from "../pictures/dd.png";
import image4 from "../pictures/hq.png";

const Hero = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 mb-10">
        <div className="grid -mb-20 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto w-96  place-self-center lg:col-span-7">
            <img className=" w-auto h-96 -mt-60" src={image2} />
            <p className="max-w-2xl -mt-40 ml-10 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Download our latest tourguide app
            </p>
            <div className="inline-flex  items-center justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center text-base font-medium text-center"
              >
                <img className="h-60 ml-6" src={image3} />
              </a>
              <a
                href="#"
                className="inline-flex justify-center px-5 text-base font-medium text-center"
              >
                <img
                  alt="Get it on Google Play"
                  className="h-14"
                  src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={image4} alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
