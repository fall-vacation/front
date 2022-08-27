import Wrap from './Wrap';

const Footer = () => {
  return (
    <>
      <footer>
        <Wrap>footer</Wrap>
      </footer>

      <style jsx>{`
        footer {
          background-color: #bababa;
          color: black;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Footer;
