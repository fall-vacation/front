import React, { useEffect } from "react";

const Post = () => {
  useEffect(() => {
    fetch("/api/posts")
      .then((data) => data.json)
      .then((json) => console.log(json));
  }, []);
  return (
    <div>
      <main>
        <h2>Post Page</h2>
      </main>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const posts = res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

export default Post;
