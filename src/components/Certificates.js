import { AcademicCapIcon, DocumentTextIcon } from "@heroicons/react/solid";
import React from "react";
import { certificates } from "../data";

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Certificates
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Alongside 2 Associates Degrees and a Bachelor's Degree in computer
            science from Weber State University here are other credentials I
            have received.
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          {certificates.map((cert) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <DocumentTextIcon className="block w-8 text-gray-500 mb-4" />
                <span className="title-font font-medium text-white">
                  {cert.name}
                </span>
                <p className="leading-relaxed mb-6">{cert.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
