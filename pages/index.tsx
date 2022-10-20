import type { NextPage } from "next";
import { Title, Introduce, NavBtns, Community } from "@/components/pages/home";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <Title />
        <Introduce />
        <NavBtns />
        <Community />
      </main>
    </div>
  );
};

export default Home;
