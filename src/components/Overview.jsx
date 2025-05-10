import { Drill, Handshake, Smile } from "lucide-react";
import React from "react";

const Overview = () => {
  return (
    <div id="about" className="md:px-20 px-10 md:pt-20 pt-10">
      <div className="md:grid grid-cols-2 items-center gap-5">
        <div className="w-full flex justify-center mb-4">
          <img
            src="/images/Hammer-tools.jpg"
            alt="Hammer and tools"
            className="rounded-2xl md:w-full w-1/2"
          />
        </div>

        <div className="text-lg text-center space-y-15 justify-center">
          <h1 className="text-4xl text-center bg-gradient-to-tr from-yellow-200 via-amber-500 to-amber-900 text-transparent bg-clip-text font-bold mb-10">
            Overview
          </h1>

          <p>
            LKK Construction and Maintenance Pty Ltd is a reputable construction
            and maintenance company dedicated to delivering high-quality
            services to residential and commercial clients. Our team of
            experienced professionals is committed to providing exceptional
            results, ensuring customer satisfaction, and building long-term
            relationships.
          </p>

          <div>
            <h2 className="text-2xl mt-10 bg-gradient-to-tr from-yellow-200 via-amber-500 to-amber-900 text-transparent bg-clip-text font-bold">
              Mission Statement
            </h2>
            <p>
              Our mission is to provide exceptional construction and maintenance
              services, exceeding client expectations and building a reputation
              for reliability, quality, and flexibility.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mt-10 bg-gradient-to-tr from-yellow-200 via-amber-500 to-amber-900 text-transparent bg-clip-text font-bold">
              Values
            </h2>
            <ul className="md:grid grid-cols-3 gap-10 space-y-10 md:space-y-0">
              <li className="flex flex-col mt-2 space-y-2 items-center justify-center space-x-0.5">
                <div className="flex items-center">
                  <Drill className="text-yellow-400" height={40} width={40} />
                  <h1 className="font-semibold"> Quality</h1>
                </div>

                <p className="text-lg">
                  We strive for excellence in every project, ensuring
                  high-standard workmanship and attention to detail.
                </p>
              </li>

              <li className="flex flex-col mt-2 space-y-2 items-center justify-center space-x-0.5">
                <div className="flex items-center">
                  <Smile className="text-yellow-400" height={40} width={40} />
                  <h1 className="font-semibold">Customer Satisfaction</h1>
                </div>

                <p className="text-lg">
                  We prioritize client needs, ensuring timely completion of
                  projects and exceptional customer service.
                </p>
              </li>

              <li className="flex flex-col mt-2 space-y-2 items-center justify-center space-x-0.5">
                <div className="flex items-center">
                  <Handshake
                    className="text-yellow-400"
                    height={40}
                    width={40}
                  />
                  <h1 className="font-semibold">Integrity</h1>
                </div>

                <p className="text-lg">
                  We operate with honesty, transparency, and professionalism in
                  all our dealings.
                </p>
              </li>
            </ul>
          </div>

          <a
            href="#contact"
            className="mt-10 bg-amber-400 hover:bg-yellow-400 cursor-pointer text-amber-100 rounded-xl py-2 px-12"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Overview;
