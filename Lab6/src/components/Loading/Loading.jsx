import React from "react";
import Spinner from "./Spinner/Spinner";

const Loading = ({ isLoading, children }) => {
  return (
    <>
      {isLoading && <Spinner />}
      {children}
    </>
  );
};

export default Loading;
