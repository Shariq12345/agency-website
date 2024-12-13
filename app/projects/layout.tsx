import React from "react";

interface ProjectslayoutProps {
  children: React.ReactNode;
}

const Projectslayout = ({ children }: ProjectslayoutProps) => {
  return <div>{children}</div>;
};

export default Projectslayout;
