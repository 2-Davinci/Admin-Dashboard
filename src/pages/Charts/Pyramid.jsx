import React from "react";

import { Header } from "../../components";
import PyramidChart from "../../components/Charts/PyramidChart";
const Pyramid = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-[#33373E] rounded-3xl text-white">
      <Header category="Chart" title="Feeding Pyramid " />
      <div className="w-full">
        <PyramidChart width="100%" height="320px" />
      </div>
    </div>
  );
};

export default Pyramid;
