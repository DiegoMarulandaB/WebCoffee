"use client";

import React from "react";

const NotFound = () => {
  return (
    <div className="mx-auto lg:px-8 max-w-screen-lg sm:px-6">
      <div className="light-bg-theme dark-bg-theme w-full h-screen flex items-center justify-center px-16 md:px-0">
        <div className="bg-slate-50 dark:bg-[#2b2d39] border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
          <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-slate-800 dark:text-slate-50 ">
            404
          </p>
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-slate-700 dark:text-slate-50 mt-4">
            Página no encontrada
          </p>
          <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
            Lo sentimos, no se pudo encontrar la página que estás buscando.
          </p>
          <a
            href="/#home"
            className="flex items-center space-x-2 text-white bg-slate-800 hover:bg-slate-950 font-medium rounded-lg text-sm px-2.5 py-2.5 me-1 mb-4 dark:text-slate-950 dark:bg-slate-50 dark:hover:bg-blue-100 mt-6 transition duration-150"
            title="Return Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Regresa atrás</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
