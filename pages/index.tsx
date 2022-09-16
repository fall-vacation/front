import type { NextPage } from "next";
import { useState } from "react";

import { Title, Introduce } from "../components/home";

const Home: NextPage = () => {
  return (
    <div>
      <main>
        <div>
          <Title />
          <Introduce />
          <div>Sed ut perspiciatis</div>
          <div>
            <div>image</div>
            <div>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est.
              </p>
            </div>
          </div>
          <div>
            <div>experience firsthand</div>
            <div>grow[raise] crops</div>
          </div>
          <div>community</div>
          <div>contact</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
