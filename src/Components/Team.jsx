import React from "react";
import image1 from "../pictures/dev12.jpg";
import image2 from "../pictures/dev-2.jpg";
import image3 from "../pictures/dev32.jpg";

function Team() {
  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="flex flex-col max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="flex flex-col justify-center">
            <h1 id="about" className="text-2xl font-bold tracking-tight text-center  text-gray-900 sm:text-4xl">
              Meet our Team
            </h1>
            <hr className="border-t-2 border-gray-900 w-96 mx-auto my-7" />
          </div>
          <div className="flex flex-row">
            <ul role="list" className="flex flex-row ml-0 text-center gap-40">
              <li>
                <div className="flex flex-col items-center gap-x-6 ml-20">
                  <img className="h-40 w-40 rounded-full" src={image1} alt="" />
                  <div>
                    <h3 className="text-base text-3xl font-semibold leading-7 tracking-tight text-gray-900">
                      Gemechis Elias
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      Project Manager and Mobile Developer
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-col items-center gap-x-6">
                  <img className="h-40 w-40 rounded-full" src={image2} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Getabalew Asfaw 
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      UI/UX Designer and creative Director
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-col items-center gap-x-6">
                  <img className="h-40 w-40 rounded-full" src={image3} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      Ayenew Tarekegn
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      Marketing Manager and Front-End Developer
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 1024px) {
          .flex-row {
            flex-direction: column;
          }
          .ml-20 {
            margin-left: 0;
            margin-top: 20px;
          }
          .gap-40 {
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default Team;
