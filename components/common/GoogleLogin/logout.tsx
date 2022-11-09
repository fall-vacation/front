import { googleLogout } from "@react-oauth/google";

export default function GoogleLogOutButton() {
  const onLogoutSuccess = () => {
    console.log("Logout !");
  };

  return <button onClick={() => googleLogout()}>LogOut</button>;
}
