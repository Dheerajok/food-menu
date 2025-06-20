import React from 'react';
import { Link } from 'react-router-dom'
import { categoryItems } from '../assets/data';


const Home = () => {
  return (
    <>

      <div className="text-center p-3">
        <h1 className="font-bold text-4xl">
          Food <span className="text-amber-300">Menu</span>
        </h1>
      </div>

      <div className="px-4 sm:px-6 md:px-0">
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-y-10 gap-x-5 mt-2 mb-5"
        >
          {categoryItems.map((item) => (
            <div
              key={item.id}
              className="w-44 sm:w-44 md:w-60 lg:w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <Link to={item.url} className="block">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 sm:h-36 md:h-52 lg:h-80 w-full object-cover rounded-t-xl"
                />
                <div className="px-2 py-2 w-full">
                  <span className="text-gray-400 mr-3 uppercase text-[10px] sm:text-xs md:text-xs">
                    click to view
                  </span>
                  <p className="text-sm sm:text-base md:text-base font-bold text-black truncate block capitalize">
                    {item.name}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </div>




    </>
  );
};

export default Home;
