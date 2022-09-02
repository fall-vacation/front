import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import axios from "axios";

const PostDetail = ({ data }: any) => {
  const router = useRouter();
  const pathId = router.query.id;

  console.log("data", data);

  return <div>post id : {pathId}</div>;
};

export async function getServerSideProps(context: any) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${context}`
  );
  const data = res.data;

  return {
    props: { data },
  };
}

export default PostDetail;
