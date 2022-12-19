const Wrapper = (children, styles) => {
  return (
    <div
      className={`max-w-[104rem] px-6 mx-auto ${styles}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
