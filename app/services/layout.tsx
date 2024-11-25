import React from "react";

interface ServicesLayoutProps {
  children: React.ReactNode;
}

const ServicesLayout = ({ children }: ServicesLayoutProps) => {
  return <div>{children}</div>;
};

export default ServicesLayout;
