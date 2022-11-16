import { VideoCameraIcon } from "@heroicons/react/solid";
import React from "react";
import { vidprojects } from "../data";

export default function Projects() {
  return (
    <section id="vidprojects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <VideoCameraIcon className="mx-auto inline-block w-10" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Videos I've worked on.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Editing, Production, Performance, I do it all when it comes to
            content creation. I have worked on many projects including some
            informational videos for the United States Air Force that I can't
            show here.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {vidprojects.map((vidproject) => (
            <a
              href={vidproject.link}
              key={vidproject.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={vidproject.image}
                />
                <div className="px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {vidproject.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {vidproject.title}
                  </h1>
                  <p className="leading-relaxed">{vidproject.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
