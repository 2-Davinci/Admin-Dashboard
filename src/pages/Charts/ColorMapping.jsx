import React from "react";
import { Header } from "../../components";
import ColorMappingChart from "../../components/Charts/ColorMappingChart";

const ColorMapping = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-[#33373E] rounded-3xl text-white">
      <Header category="Chart" title="Color Mapping " />
      <div className="w-full">
        <ColorMappingChart width="100%" height="320px" />
      </div>
    </div>
  );
};

export default ColorMapping;
