import React from "react";
import image1 from "../pictures/f1.jpg";
import image2 from "../pictures/f-2.jpg";
import image3 from "../pictures/f-3.jpg";
import image4 from "../pictures/f-4.jpg";

const features1 = [
  {
    picture: image1,
    name: "Creating Community",
    description:
      "We have created a platform where users can engage with each other by posting the places they have visited and their experience there",
  },
  {
    picture: image2,
    name: "Sterioscopic 3D View",
    description:
      "Enjoy an Immersive experience using our app through our Sterioscopic 3D cview of uploaded pictures.",
  },
];

const features2 = [
  {
    picture: image3,
    name: "AI Recommendation",
    description:
      "Harnessing the power of AI, it analyzes your preferences, and travel history to provide tailored recommendations.",
  },
  {
    picture: image4,
    name: "Multiple Languages Preference",
    description:
      "Engage with users from all over ethiopia with out language barrier with the help of our multiple language support",
  },
];
const OurTeam = () => {
  return (
    <div>
      <h1
        className="text-center text-3xl pt-10 font-bold bg-white text-black"
        id="features"
      >
        Core Features{" "}
      </h1>
      <div className="flex flex-row justify-center text-left gap-60 bg-white pt-10 pb-10">
        {features1.map((features1, index) => (
          <div
            className="  rounded-xl hover:shadow-2xl"
            key={index}
            style={{ flexBasis: "20%" }}
          >
            <figure>
              <img
                className="rounded-xl h-30 w-auto"
                src={features1.picture}
                alt={features1.name}
              />
            </figure>
            <div className="card-body mt-2 ml-5 text-left">
              <h2 className="card-title text-left text-black text-xl font-bold">
                {features1.name}
              </h2>
              <p className="text-gray-700">
                {features1.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-center gap-60 bg-white text-left pb-10">
        {features2.map((features2, index) => (
          <div
            className="rounded-xl hover:shadow-2xl ease-in"
            key={index}
            style={{ flexBasis: "20%" }}
          >
            <figure>
              <img
                className="rounded-xl h-auto w-auto"
                src={features2.picture}
                alt={features2.name}
              />
            </figure>
            <div className="card-body mt-2 ml-5">
              <h2 className="card-title tracking-tight text-left text-black text-xl font-bold">
                {features2.name}
              </h2>
              <p className="mb-2 text-left text-gray-700">{features2.description}</p>
              
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
export default OurTeam;
