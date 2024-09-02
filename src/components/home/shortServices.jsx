import { Award, BadgeDollarSign, CalendarClock, Truck } from "lucide-react";
import React from "react";

const ShortServices = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4 py-4 px-2 border border-slate-300 my-4 rounded">
      <div className="flex items-center gap-2 py-5  md:border-r border-slate-300">
        <Award size={50} />
        <div>
          <p className="text-xl font-Baskervville font-semibold">
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-slate-400">consectetur adipiscing elit</p>
        </div>
      </div>

      <div className="flex items-center gap-2 py-5  md:border-r border-slate-300">
        <BadgeDollarSign size={50} />
        <div>
          <p className="text-xl font-Baskervville font-semibold">
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-slate-400">consectetur adipiscing elit</p>
        </div>
      </div>

      <div className="flex items-center gap-2 py-5  md:border-r border-slate-300">
        <Truck size={50} />
        <div>
          <p className="text-xl font-Baskervville font-semibold">
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-slate-400">consectetur adipiscing elit</p>
        </div>
      </div>

      <div className="flex items-center gap-2 py-5  ">
        <CalendarClock size={50} />
        <div>
          <p className="text-xl font-Baskervville font-semibold">
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-slate-400">consectetur adipiscing elit</p>
        </div>
      </div>
    </div>
  );
};

export default ShortServices;
