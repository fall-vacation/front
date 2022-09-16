import type { NextPage } from "next";

const Home: NextPage = () => {
  function onSignIn(googleUser: any) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  return (
    <div>
      <main>
        <h2>Home</h2>
        <div className='g-signin2' data-onsuccess='onSignIn'></div>
      </main>
    </div>
  );
};

export default Home;
