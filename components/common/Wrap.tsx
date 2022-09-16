type AppWrapProps = {
  children: React.ReactNode;
};
const Wrap = ({ children }: AppWrapProps) => {
  return (
    <>
      <div className='wrap'>{children}</div>
      <style jsx>
        {`
          .wrap {
            max-width: 1680px;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  );
};

export default Wrap;
