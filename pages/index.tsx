import type { NextPage } from "next";
import { Title, Introduce, NavBtns } from "../components/pages/home";

const Home: NextPage = () => {
  return (
    <main>
      <Title />
      <Introduce />
      <NavBtns />
    </main>
  );
};

export default Home;
