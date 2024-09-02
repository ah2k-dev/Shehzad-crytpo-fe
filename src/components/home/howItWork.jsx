import React from "react";
import Heading from "../common/heading";
import { Globe, Package, Search, ShoppingCart } from "lucide-react";

const HowItWork = () => {
  return (
    <div>
      <Heading title={"How it works?"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20">
        <div className="rounded-md border border-zinc-700 bg-zinc-900 shadow-zinc-100">
          <div className="bg-howwork bg-cover rounded-tr-md rounded-tl-lg ">
            <div className="flex justify-center bg-gray-400/40 py-14 rounded-tr-md rounded-tl-lg ">
              <span className="bg-zinc-500 rounded-lg border border-zinc-700 p-2 shadow-lg">
                <Globe size={36} className="text-white" />
              </span>
            </div>
          </div>
          <div className="p-5">
            <p className="my-2 font-Baskervville text-2xl text-center font-semibold">
              Lorem ipsum dolor
            </p>
            <p className="text-center text-slate-500 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="rounded-md border border-zinc-700 bg-zinc-900 shadow-zinc-100">
          <div className="bg-howwork bg-cover rounded-tr-md rounded-tl-lg ">
            <div className="flex justify-center bg-gray-400/40 py-14 rounded-tr-md rounded-tl-lg ">
              <span className="bg-zinc-500 rounded-lg border border-zinc-700 p-2 shadow-lg">
                <ShoppingCart size={36} className="text-white" />
              </span>
            </div>
          </div>
          <div className="p-5">
            <p className="my-2 font-Baskervville text-2xl text-center font-semibold">
              Lorem ipsum dolor
            </p>
            <p className="text-center text-slate-500 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="rounded-md border border-zinc-700 bg-zinc-900 shadow-zinc-100">
          <div className="bg-howwork bg-cover rounded-tr-md rounded-tl-lg ">
            <div className="flex justify-center bg-gray-400/40 py-14 rounded-tr-md rounded-tl-lg ">
              <span className="bg-zinc-500 rounded-lg border border-zinc-700 p-2 shadow-lg">
                <Package size={36} className="text-white" />
              </span>
            </div>
          </div>
          <div className="p-5">
            <p className="my-2 font-Baskervville text-2xl text-center font-semibold">
              Lorem ipsum dolor
            </p>
            <p className="text-center text-slate-500 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
