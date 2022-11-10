import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function KakaoLogin() {
  const router = useRouter();

  useEffect(() => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&code=${
        router.asPath.split("code=")[1]
      }&scope=account_email`,
    });
  }, []);

  return <div>인가코드 받기</div>;
}
