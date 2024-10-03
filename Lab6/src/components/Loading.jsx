import React from "react";
import Spinner from "./Spinner";

const Loading = ({ isLoading, children }) => {
  return (
    <>
      {isLoading && <Spinner />}
      {children}
    </>
  );
};

export default Loading;
