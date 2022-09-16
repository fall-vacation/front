import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const onSIgnIn = (googleUser: any) => {
    const profile = googleUser.getBasicProfile();
    console.log("google profile", profile);

    setIsLogin(true);
  };

  return (
    <div>
      <main>
        <h2>Home</h2>
        <div className='g-signin2' data-onsuccess='onSignIn'></div>
        <div>{isLogin ? "로그인이 되었습니다" : "로그인을 해주세요"}</div>
      </main>
    </div>
  );
};

export default Home;
