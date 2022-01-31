import React from "react";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <p>Home</p>
      <p>go to App.tsx to add more routes</p>
    </div>
  );
};
