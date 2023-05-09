import React from "react";
import face from "../imgs/person1.jpg";

const Review = () => {
  return (
    <div className="grid grid-cols-6 t-4 bg-slate-300 py-2 px-2 rounded-xl">
      <div className="col-span">
        <img src={face} className="h-16 rounded-xl" />
      </div>
      <div className="col-span-5 ml-2">
        <p className="text-xl font-semibold">Nancy Sterling</p>
        <p>I had an easy time cashing out my TRB Items in Little Rock!</p>
      </div>
    </div>
  );
};

export default Review;
