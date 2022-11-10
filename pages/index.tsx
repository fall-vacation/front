import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Title, Introduce, NavBtns, Community } from "@/components/pages/home";

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const KAKAKO_CODE = router.asPath.split("code=")[1];
    KAKAKO_CODE &&
      fetch(`https://kauth.kakao.com/oauth/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&code=${KAKAKO_CODE}&scope=account_email`,
      });
  }, []);

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
