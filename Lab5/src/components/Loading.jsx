const Loading = ({ isLoading, children }) => {


  return (
    <>
      {isLoading && <Spinner />}
      {children} 
    </>
  );
};

export default Loading;
