"use client";

import { InlineWidget } from "react-calendly";

export const Calendly = () => {
  return (
    <div className="w-full ">
      <InlineWidget
        styles={{ height: "1000px" }}
        url="https://calendly.com/pixelflow-tips/30min"
      />
    </div>
  );
};