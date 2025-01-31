import React from "react";

const Spinner: React.FC = () => (
  <div className="h-full flex justify-center items-center">
    <div className="w-6 h-6 animate-spin rounded-full border-4 border-t-transparent border-blue-500"></div>
  </div>
);

export default Spinner;
