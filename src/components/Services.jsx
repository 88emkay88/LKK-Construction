import React from "react";

const Services = () => {
  return (
    <div className="p-10 mt-10 bg-amber-200">
      <h1
        id="services"
        className="text-5xl text-center bg-gradient-to-tr from-yellow-600 via-amber-600 to-amber-200 text-transparent bg-clip-text font-bold"
      >
        Services
      </h1>

      <div className="mt-8 md:grid grid-cols-2 gap-4 space-y-10 md:space-y-0 text-amber-100">
        <div className="bg-yellow-600 hover:bg-yellow-500 shadow-lg hover:shadow-2xl flex flex-col p-10 rounded-2xl transition duration-500">
          <h2 className="text-center text-2xl bg-gradient-to-tr from-yellow-100 via-amber-200 to-amber-300 text-transparent bg-clip-text font-bold">
            Maintainance
          </h2>
          <ul className="list-disc text-xl text-amber-100">
            <li>Painting</li>
            <li>Tiling</li>
            <li>Roofing</li>
            <li>Cleaning</li>
            <li>Electrical</li>
            <li>Plumbing</li>
            <li>Glazing</li>
            <li>Landscape</li>
          </ul>
        </div>

        <div className="bg-yellow-600 hover:bg-yellow-500 shadow-lg hover:shadow-2xl flex flex-col p-10 rounded-2xl transition duration-500">
          <h2 className="text-center text-2xl bg-gradient-to-tr from-yellow-100 via-amber-200 to-amber-300 text-transparent bg-clip-text font-bold ">
            Construction
          </h2>
          <ul className="list-disc text-xl text-amber-100">
            <li>Brickwork</li>
            <li>Plastering</li>
            <li>Tiling</li>
            <li>Painting/Waterproofing</li>
            <li>Renovation</li>
            <li>Paving</li>
            <li>Carpentry</li>
            <li>Rafting</li>
            <li>Roof Work</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
