import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { registerLicense } from "@syncfusion/ej2-base";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import "./App.css";

import { useStateContext } from "./context/ContextProvider";
registerLicense(
  "Mgo+DSMBaFt+QHFqVkNrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRcQl5hTn9Xck1jWXZYcXE=;Mgo+DSMBPh8sVXJ1S0d+X1RPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSX1RcURnXXdecH1SQmU=;ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5QdEJiXXtWcHRcTmlZ;MTQ4ODkzM0AzMjMxMmUzMTJlMzMzNWVOc0tueVcwdDVqenE0cVFaTW1RK0JIY3lka2U2MncyRXYxTncyeEwrY0U9;MTQ4ODkzNEAzMjMxMmUzMTJlMzMzNVZRbVZxelNvS2hyaWFydkNDRUVib0lIalFJaUpmbEZJd21xcy90dHB3SWs9;NRAiBiAaIQQuGjN/V0d+XU9Hc1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TdUdkWHtaeHRURmZZVA==;MTQ4ODkzNkAzMjMxMmUzMTJlMzMzNVhtTXV3NFpEZ21DcnAxVURJV3djaGhBZzZwb0hUMzl1SUlKSTlkWHcvcms9;MTQ4ODkzN0AzMjMxMmUzMTJlMzMzNUhOQUhqZGc1c0NnTCthSkZaV1RsNUtEYUd3dG1VSHp0RWZWLzd3SFE3M1E9;Mgo+DSMBMAY9C3t2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5QdEJiXXtWcHVUQmFZ;MTQ4ODkzOUAzMjMxMmUzMTJlMzMzNUl4ZzdUcG5FSEw1aUhnS0dscEFRVk4zVENSREMwdHVYQ3liVzZMYlJlWmc9;MTQ4ODk0MEAzMjMxMmUzMTJlMzMzNUV6ZHUyTlN5OVd5YXI4M2U3TTZzWUgwdVUvZE5JeEk0VEtrLytqT0hsV2s9;MTQ4ODk0MUAzMjMxMmUzMTJlMzMzNVhtTXV3NFpEZ21DcnAxVURJV3djaGhBZzZwb0hUMzl1SUlKSTlkWHcvcms9"
);
const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray">
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
