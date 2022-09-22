import type { NextPage } from "next";
import { Title, Introduce, NavBtns } from "../components/home";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <Title />
        <Introduce />

        <NavBtns />
      </main>
    </div>
  );
};

export default Home;
